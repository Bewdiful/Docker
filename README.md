# Docker
1. Introduction to Docker
Docker is a platform for developing, shipping, and running applications in lightweight, portable containers. Containers allow you to package an application with all its dependencies and run it consistently across different environments.

Key Concepts
Container: A lightweight, standalone executable package that includes everything needed to run an application.

Image: A read-only template used to create containers.

Dockerfile: A text file containing instructions to build a Docker image.

Docker Hub: A cloud-based registry for sharing Docker images.

Basic Docker Commands
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


[Cheat-Sheet-Images-Containers.pdf](https://github.com/user-attachments/files/19483560/Cheat-Sheet-Images-Containers.pdf)

