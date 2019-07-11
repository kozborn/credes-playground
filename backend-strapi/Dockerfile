FROM node:10.16-stretch

ENV PORT=1337
ARG ENV_WORKDIR

RUN echo $ENV_WORKDIR

WORKDIR $ENV_WORKDIR

COPY . .

RUN echo "unsafe-perm = true" >> ~/.npmrc

RUN npm install

EXPOSE $PORT

COPY ./wait-for-it.sh /usr/src/backend-strapi/wait-for-it.sh

RUN chmod +x /usr/src/backend-strapi/wait-for-it.sh

# CMD ["strapi", "develop"]
