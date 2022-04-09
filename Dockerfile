FROM node:12.20.1
RUN mkdir -p /app
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
RUN npm install --production=false
RUN npm install 
RUN npm i -g @nestjs/cli
COPY . .

RUN nest build

EXPOSE 5000
ENV PORT=5000

CMD ["npm","run","start:prod"]