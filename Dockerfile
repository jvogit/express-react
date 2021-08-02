FROM node:14-alpine

# need glibc
RUN apk add --no-cache libc6-compat

# Create app client directory
WORKDIR /app/client

# Install client dependencies
COPY /client/package.json .
COPY /client/yarn.lock .

RUN yarn

# Bundle React app
COPY /client .

RUN yarn build

WORKDIR /app/server

# copy over React build to app public
RUN mkdir -p dist/public && mv /app/client/build/* /app/server/dist/public

# Install express dependencies
# Copy over package.json
# Copy over yarn.lock
COPY ./server/package.json .
COPY ./server/yarn.lock .

RUN yarn

# Bundle express source
COPY ./server .

RUN yarn build

ENV NODE_ENV production
ENV MONOLITHIC true

EXPOSE 4000
CMD [ "node", "dist/index.js" ]
USER node