# Use the latest Ubuntu image
FROM node:latest

# copy website and install dependencies
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 30

FROM ubuntu:20.04

# Update and install necessary packages
RUN apt-get update && apt-get install -y \
    sudo \
    openssh-server \
    nginx \
    nano

# Add user hamar-utvikling
RUN useradd -m -d /var/www/html hamar-utvikling && \
    usermod -aG sudo hamar-utvikling

# SSH
COPY authorized_keys /home/hamar-utvikling/.ssh/authorized_keys
RUN chown -R hamar-utvikling:hamar-utvikling /home/hamar-utvikling/.ssh && \
    chmod 700 /home/hamar-utvikling/.ssh && \
    chmod 600 /home/hamar-utvikling/.ssh/authorized_keys
RUN sed -i 's/#PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config && \
    echo "AllowUsers hamar-utvikling" >> /etc/ssh/sshd_config

# Naviates to the /var/www/html directory when hamar-utvikling logs in
RUN touch /home/hamar-utvikling/.bashrc
RUN echo "cd /var/www/html" >> /home/hamar-utvikling/.bashrc

# Run ngnix
CMD ["nginx", "-g", "daemon off;"]