FROM node:20-alpine 


WORKDIR /server


COPY package*.json ./

RUN npm install 

COPY . .

# ENV 

EXPOSE 4000

CMD ["npm", "run", "dev"]

