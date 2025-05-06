# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose the port React dev server uses
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
