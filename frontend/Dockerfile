# Use an existing image as a base
FROM node:14.16.1-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3001

# Start the server
CMD ["npm", "run", "server"]