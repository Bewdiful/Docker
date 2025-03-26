# Docker
1. Introduction to Docker
Docker is a platform for developing, shipping, and running applications in lightweight, portable containers. Containers allow you to package an application with all its dependencies and run it consistently across different environments.

Key Concepts
Container: A lightweight, standalone executable package that includes everything needed to run an application.

Image: A read-only template used to create containers.

Dockerfile: A text file containing instructions to build a Docker image.

Docker Hub: A cloud-based registry for sharing Docker images.

2. Installing Docker
On Linux (Ubuntu)
# Update packages
sudo apt update

# Install dependencies
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker’s GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Add Docker repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Verify installation
sudo docker --version

On macOS / Windows
Download and install Docker Desktop from https://www.docker.com/products/docker-desktop.

3. Basic Docker Commands
Command	Description
docker --version	Check Docker version
docker info	Display system-wide information
docker run <image>	Run a container from an image
docker ps	List running containers
docker ps -a	List all containers (including stopped ones)
docker stop <container_id>	Stop a running container
docker rm <container_id>	Remove a container
docker images	List all images
docker rmi <image_id>	Remove an image
docker pull <image>	Download an image from Docker Hub
docker exec -it <container_id> bash	Enter a running container

  ![image](https://github.com/user-attachments/assets/7daf4b3b-b05a-4e37-979a-6c4de0a8e500)
