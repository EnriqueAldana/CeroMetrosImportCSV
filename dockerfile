FROM node:16

# Create app directory
WORKDIR $PWD

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY /uploadFiles/* ./uploadFiles/
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
# Start app
ENTRYPOINT ["/docker/entrypoint.sh"]

CMD [ "node", "CeroMetrosFileServer.js" ]