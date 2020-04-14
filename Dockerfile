# LTS Node Image
FROM node:lts-buster AS base

WORKDIR /app

# Copy configuration and install npm dependencies
COPY ./app/package.json /app/package.json
COPY ./app/package-lock.json /app/package-lock.json
RUN npm ci

# Copy the rest of the source code
COPY ./app ./

# Development image
FROM base AS develop
ENTRYPOINT ["npm", "run", "dev"];

# Release image
FROM base AS deploy
RUN npm run build
CMD npm run serve