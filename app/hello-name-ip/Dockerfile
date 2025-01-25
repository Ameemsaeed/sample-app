# Use a base image with a lightweight web server
FROM nginx:alpine

# Copy the files into the Nginx HTML directory
COPY . /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

