# Use official Node.js LTS image
FROM node:22

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose backend port (e.g., 5000)
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
