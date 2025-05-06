# Step 1: Use the official Node.js image to build the API server
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . ./

# Expose the API port
EXPOSE 3000

# Start the API server
CMD ["node", "server.js"]

