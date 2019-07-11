FROM node:10.16-stretch-slim

ENV PORT=3000
ARG ENV_WORKDIR

WORKDIR $ENV_WORKDIR

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

COPY . .

EXPOSE $PORT
