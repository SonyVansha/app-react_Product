# Step 1: Gunakan node:alpine untuk membangun aplikasi React
FROM node:18-alpine AS build

# Set working directory di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh file aplikasi React
COPY . .

# Build aplikasi React
RUN npm run build

# Step 2: Gunakan nginx:alpine untuk menyajikan aplikasi React
FROM nginx:alpine

# Salin build React ke dalam direktori public Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 untuk akses ke aplikasi
EXPOSE 80

# Jalankan Nginx di background
CMD ["nginx", "-g", "daemon off;"]