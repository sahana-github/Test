# Use the official Node.js image
FROM node:14

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

# Copy project files
COPY . /app/

# Build the app
RUN npm run build

# Serve the app using serve
RUN npm install -g serve
CMD ["serve", "-s", "build"]
