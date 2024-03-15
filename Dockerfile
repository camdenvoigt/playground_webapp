# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /playground_webapp/

# Exposing server port
EXPOSE 3000

# Starting our application
CMD npm run server
