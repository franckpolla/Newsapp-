# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies using npm
RUN npm install

# Copy the entire project directory
COPY . .

# Expose port 3000 where the Next.js app runs
EXPOSE 3000

# Start the development server using npm run dev
CMD ["npm", "run", "dev"]