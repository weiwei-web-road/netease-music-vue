FROM node:boron

MAINTAINER Yali Wang, Longlong Li

# Use Alibaba's NPM mirror
RUN npm set registry https://registry.npm.taobao.org/

# active api server
RUN mkdir -p /usr/projects/netease-musice-api
WORKDIR /usr/projects/netease-musice-api

RUN git clone https://github.com/Binaryify/NeteaseCloudMusicApi
RUN npm install --production
# runing in 4000 port
RUN PORT=4000 node app.js

# creat workdir
RUN mkdir -p /usr/projects/netease-musice-vue
WORKDIR /usr/projects/netease-musice-vue

# Install dependencies
COPY package.json /usr/projects/netease-musice-vue
RUN npm install --production

# copy other codes and resources
COPY . /usr/projects/netease-musice-vue

EXPOSE 8080
# ENTRYPOINT diff CMD CDM can be overrided
CMD [ "npm", "run", "serve" ]
