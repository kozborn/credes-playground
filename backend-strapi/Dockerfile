FROM node:10.16-stretch-slim

ENV PORT=1337
ARG ENV_WORKDIR
WORKDIR $ENV_WORKDIR

RUN echo "unsafe-perm = true" >> ~/.npmrc

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

EXPOSE $PORT

COPY ./wait-for-it.sh $ENV_WORKDIR/wait-for-it.sh

RUN chmod +x $ENV_WORKDIR/wait-for-it.sh
