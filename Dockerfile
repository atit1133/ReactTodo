# Use lightweight Node.js image
FROM node:lts-alpine

# Set environment to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent

# Copy application code
COPY . .

# Ensure non-root user owns files
RUN chown -R node /usr/src/app

# Switch to non-root user
USER node

# Expose application port
EXPOSE 5173

# Start the application
CMD ["npm", "start"]

