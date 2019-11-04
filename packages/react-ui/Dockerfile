FROM node:12.13-alpine as builder

# Environment
WORKDIR /home/app
ENV NODE_ENV=production

# Dependencies

COPY package.json /home/app/
COPY yarn.lock /home/app/
COPY lerna.json /home/app/

COPY packages/react-ui/package.json /home/app/packages/react-ui/

# COPY packages/unicode-tools/package.json /home/app/packages/shared/

# RUN npm ci --ignore-scripts --production --no-optional
RUN yarn global add lerna
RUN lerna bootstrap --ignore-scripts -- --production --no-optional

# Build

COPY . /home/app/
RUN cd packages/react-ui && yarn build

# Serve

FROM nginx:1.15-alpine
COPY --from=builder /home/app/packages/react-ui/build /usr/share/nginx/html