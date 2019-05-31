FROM node:boron

MAINTAINER Yali Wang, Longlong Li

# Use Alibaba's NPM mirror
RUN npm set registry https://registry.npm.taobao.org/

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