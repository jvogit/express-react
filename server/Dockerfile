FROM node:14-alpine

# need glibc
RUN apk add --no-cache libc6-compat

# Create app directory
WORKDIR /app

# Install app dependencies
# Copy over package.json
# Copy over yarn.lock
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

ENV NODE_ENV production

EXPOSE 4000
CMD [ "node", "dist/index.js" ]
USER node