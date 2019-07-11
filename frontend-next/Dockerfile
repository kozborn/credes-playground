FROM node:10.16-stretch

ENV PORT=3000
ARG ENV_WORKDIR

RUN echo $ENV_WORKDIR

WORKDIR $ENV_WORKDIR

COPY . .

RUN rm -rf ./node_modules/ && npm install

EXPOSE $PORT
