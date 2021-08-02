# express-react
Fullstack web application template entirely in Typescript. Uses: Express, React,
GraphQL, Postgres, and JWT authentication. Inspired by [this YouTube video](https://www.youtube.com/watch?v=I6ypD7qv3Z8).
## Deployment
Use Docker to deploy service.
- `Dockerfile.mono` will build an image of monolithic web app.
- Set necessary `.env` variables

Otherwise, `client` and `server` can be deployed separately. `server`
is dockerized as well.