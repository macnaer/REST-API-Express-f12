FROM node:14-buster

WORKDIR /var/app/

COPY . /var/app/

RUN npm i && cd client-app && npm i && cd ..

EXPOSE 80 

CMD ["npm", "run", "dev"]
