# Podman

## Basic Podman Commands:

* podman run <image>: Run a container from an image.
* podman ps: List all running containers.
* podman stop <container>: Stop a running container.
* podman rm <container>: Remove a stopped container.
* podman images: List all available images.
* podman rmi <image>: Remove an image.
* podman pull <image>: Pull an image from a registry.
* podman push <image>: Push an image to a registry.

## Building Images with Podman:

* podman build -t <image> <path>: Build an image from a Dockerfile.
* podman build -t <image> -f <Dockerfile> <path>: Build an image using a specific Dockerfile.

## Container Management with Podman:

* podman start <container>: Start a stopped container.
* podman restart <container>: Restart a running container.
* podman exec -it <container> <command>: Execute a command inside a running container.
* podman logs <container>: Fetch the logs of a container.
* podman inspect <container>: Get detailed information about a container.
* podman stats <container>: Display live CPU, memory, and network usage of a container.
* podman top <container>: Display running processes inside a container.

## Networking with Podman:

* podman network ls: List all networks.
* podman network create <network>: Create a new network.
* podman network inspect <network>: Get detailed information about a network.
* podman network connect <network> <container>: Connect a container to a network.
* podman network disconnect <network> <container>: Disconnect a container from a network.
* podman port <container>: List all ports mapped to a container.
* podman run -p <host-port>:<container-port> <image>: Map a container port to a host port.

## Volumes with Podman:

* podman volume ls: List all volumes.
* podman volume create <volume>: Create a new volume.
* podman volume inspect <volume>: Get detailed information about a volume.
* podman run -v <host-path>:<container-path> <image>: Mount a host directory as a volume in a container.

## Podman Compose:

* podman-compose up: Create and start containers defined in the podman-compose.yml file.
* podman-compose down: Stop and remove containers defined in the podman-compose.yml file.
* podman-compose logs: Fetch the logs of containers defined in the podman-compose.yml file.
* podman-compose exec <service> <command>: Execute a command in a running service container.
  
## Podman Pod Management:

* podman pod create --name <pod> [options]: Create a pod to manage multiple containers.
* podman pod start <pod>: Start a pod and its associated containers.
* podman pod stop <pod>: Stop a running pod and its associated containers.
* podman pod rm <pod>: Remove a stopped pod and its associated containers.
* podman pod ps: List all running pods and their associated containers.

## Podman Advanced Container Management:

* podman exec -it <container> <command>: Execute a command inside a running container.
* podman logs <container>: Fetch the logs of a container.
* podman inspect <container>: Get detailed information about a container.
* podman stats <container>: Display live CPU, memory, and network usage of a container.
* podman top <container>: Display running processes inside a container.
* podman generate systemd --new --name <container> --files: Generate a systemd unit file for running a container as a service.

## Podman Networking:

* podman network create --driver <driver> <network>: Create a new user-defined network.
* podman network ls: List all networks.
* podman network inspect <network>: Get detailed information about a network.
* podman network connect <network> <container>: Connect a container to a network.
* podman network disconnect <network> <container>: Disconnect a container from a network.
* podman run -p <host-port>:<container-port> <image>: Map a container port to a host port.

## Podman Volumes:

* podman volume create <volume>: Create a new volume.
* podman volume ls: List all volumes.
* podman volume inspect <volume>: Get detailed information about a volume.
* podman run -v <host-path>:<container-path> <image>: Mount a host directory as a volume in a container.

## Podman Security and Privileges:

* Run containers as non-root users to enhance security and limit privileges.
* Utilize Podman's --security-opt option to configure security options for containers.
* Use Podman's --cap-drop and --cap-add options to drop or add Linux capabilities.
* Employ SELinux or AppArmor profiles for container isolation and confinement.

## Podman Buildah Integration:

* buildah bud -t <image> <path>: Build an image from a Dockerfile using Buildah.
* buildah images: List all available images built with Buildah.
* buildah rmi <image>: Remove an image built with Buildah.
* buildah push <image> <destination>: Push an image built with Buildah to a remote registry.
