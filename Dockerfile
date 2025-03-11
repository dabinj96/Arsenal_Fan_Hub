# Dockerfile

# 1) Choose a base image with Node.js 
FROM node:16

# 2) Set the working directory inside the container
WORKDIR /usr/src/app

# 3) Copy package.json and package-lock.json into the container
COPY package*.json ./

# 4) Install dependencies
RUN npm install

# 5) Copy the rest of your application code
COPY . .

# 6) Expose the port your app runs on
EXPOSE 3000

# 7) Defind the command to start your app
CMD [ "node", "server.js" ]

