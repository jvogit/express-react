# express-react
Fullstack web application template entirely in Typescript. Uses: Express, React,
GraphQL, Postgres, and JWT authentication. Inspired by [this YouTube video](https://www.youtube.com/watch?v=I6ypD7qv3Z8).
## Deployment
Use Docker to deploy service.
- `Dockerfile.mono` will build an image of monolithic web app.
- Set necessary `.env` variables

Otherwise, `client` and `server` can be deployed separately. `server`
is dockerized as well.
## Heroku deployment
Using Heroku CLI or Heroku website.

The following is steps for invoking the `setup` portion of heroku.yml
- `heroku update beta`
- `heroku plugins:install @heroku-cli/plugin-manifest` (if not already installed)
- `heroku create <your-app-name> --manifest`

Othwerise, please follow
- Set up heroku dyno on website or thru cli
- Install postgres addon on website or thru cli
- `heroku stack:set container` (let heroku know this is a Docker contianer stack)

Now follow:
- `heroku git:remote -a <appname>` (to set heroku remote in your local repo)
- `heroku config:set PGSSLMODE=no-verify` (otherwise error will occur)
- `heroku config:set ACCESS_TOKEN_SECRET=<secret here>`
- `heroku config:set REFRESH_TOKEN_SECRET=<secret here>`
- `heroku config:set CORS_ORIGIN=<value>` (Vercel link, domain name, etc.)
- `git push heroku master`
