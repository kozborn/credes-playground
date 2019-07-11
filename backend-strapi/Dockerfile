FROM node:10.16-stretch

ENV PORT=1337
ARG ENV_WORKDIR

RUN echo $ENV_WORKDIR

WORKDIR $ENV_WORKDIR

COPY . .

RUN echo "unsafe-perm = true" >> ~/.npmrc

RUN rm -rf ./node_modules
RUN npm install

EXPOSE $PORT

COPY ./wait-for-it.sh $ENV_WORKDIR/wait-for-it.sh

RUN chmod +x $ENV_WORKDIR/wait-for-it.sh
