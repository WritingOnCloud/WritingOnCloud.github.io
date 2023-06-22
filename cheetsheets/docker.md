# Docker Cheet Sheet 
## Docker Basics:

* docker run <image>: Run a container from an image.
* docker ps: List all running containers.
* docker stop <container>: Stop a running container.
* docker rm <container>: Remove a stopped container.
* docker images: List all available images.
* docker rmi <image>: Remove an image.
* docker pull <image>: Pull an image from a registry.
* docker push <image>: Push an image to a registry.

## Building Images:

* docker build -t <image> <path>: Build an image from a Dockerfile.
* docker build -f <Dockerfile> -t <image> <path>: Build an image using a specific Dockerfile.
* docker build -t <image> - < <Dockerfile>: Build an image from a Dockerfile passed through stdin.

## Container Management:

* docker start <container>: Start a stopped container.
* docker restart <container>: Restart a running container.
* docker pause <container>: Pause all processes within a container.
* docker unpause <container>: Unpause a paused container.
* docker exec -it <container> <command>: Execute a command inside a running container.
* docker logs <container>: Fetch the logs of a container.
* docker inspect <container>: Get detailed information about a container.
* docker stats <container>: Display live CPU, memory, and network usage of a container.
* docker top <container>: Display running processes inside a container.

## Networking:

* docker network ls: List all networks.
* docker network create <network>: Create a new network.
* docker network inspect <network>: Get detailed information about a network.
* docker network connect <network> <container>: Connect a container to a network.
* docker network disconnect <network> <container>: Disconnect a container from a network.
* docker port <container>: List all ports mapped to a container.
* docker run -p <host-port>:<container-port> <image>: Map a container port to a host port.

## Volumes:

* docker volume ls: List all volumes.
* docker volume create <volume>: Create a new volume.
* docker volume inspect <volume>: Get detailed information about a volume.
* docker run -v <host-path>:<container-path> <image>: Mount a host directory as a volume in a container.

## Docker Compose:

* docker-compose up: Create and start containers defined in the docker-compose.yml file.
* docker-compose down: Stop and remove containers defined in the docker-compose.yml file.
* docker-compose logs: Fetch the logs of containers defined in the docker-compose.yml file.
* docker-compose exec <service> <command>: Execute a command in a running service container.
  
## Dockerfile Directives:

* FROM <base-image>: Specify the base image for your Docker image.
* RUN <command>: Execute a command in the shell during the image build.
* CMD ["executable", "param1", "param2"]: Specify the default command to run when the container starts.
* ENTRYPOINT ["executable", "param1", "param2"]: Configure a container to run as an executable.
* COPY <src> <dest>: Copy files or directories from the build context to the container.
* ADD <src> <dest>: Copy files or directories from the build context to the container (supports remote URLs and extraction).
* ENV <key>=<value>: Set environment variables in the image.
* EXPOSE <port>: Specify the network ports that the container listens on at runtime.
* WORKDIR /path/to/directory: Set the working directory for the subsequent instructions.
* VOLUME /path: Create a mount point and mark it as externally mounted.

## Containerization Best Practices:

* Keep the container lightweight by only including necessary dependencies.
* Avoid running processes as root inside the container. Use a non-root user.
* Use a .dockerignore file to exclude unnecessary files and directories from the build context.
* Leverage multi-stage builds to create smaller and more secure images.
* Use labels to provide metadata about the image and container.
* Utilize health checks to monitor the status of a running container.
* Remove unnecessary or sensitive environment variables from the container.
* Use a minimal base image to reduce the attack surface.
* Ensure that containers are stateless and data is stored externally (e.g., in volumes or databases).
* Optimize image layers by grouping related commands and minimizing the number of layers.
* Avoid running multiple processes inside a single container; use multiple containers instead.

## Docker Networking:

* Use user-defined networks to isolate and connect containers.
* Create network aliases to provide multiple network interfaces for a container.
* Utilize bridge networks for communication between containers on the same host.
* Implement overlay networks for multi-host communication.
* Use network scopes to restrict network visibility.
* Configure DNS resolution within containers using the --dns flag or custom DNS configurations.
* Utilize external load balancers or service meshes for container traffic management.

## Docker Security:

* Regularly update Docker and its components to benefit from the latest security patches.
* Enable content trust (DOCKER_CONTENT_TRUST=1) to verify the authenticity of image publishers.
* Scan container images for vulnerabilities using security scanning tools like Clair, Trivy, or Anchore.
* Apply security best practices to the host machine running Docker to prevent unauthorized access.
* Employ Docker secrets to manage sensitive data like passwords and API keys.
* Use the principle of least privilege when defining container capabilities and access control.
