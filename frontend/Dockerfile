FROM node:22

WORKDIR /app

# Copy package.json first to leverage Docker caching
COPY frontend/package.json frontend/package-lock.json ./

RUN npm install

# Copy the rest of the frontend code
COPY frontend/ ./

CMD ["npm", "run", "dev"]
