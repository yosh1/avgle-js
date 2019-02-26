FROM node:10.11.0-alpine

ENV NODE_ENV=development

ARG project_dir=/app/
COPY . ${project_dir}
WORKDIR ${project_dir}

RUN set -x && \
    apk upgrade --no-cache && \
    apk add vim  \
            git && \
    apk add --update nodejs nodejs-npm && \
    npm install

EXPOSE 3000

CMD ["npm","run","start"]
