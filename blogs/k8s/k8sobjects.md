# Kubernetes Objects

Kubernetes is an open-source container orchestration platform that allows you to manage, deploy, and scale containerized applications. 
There are several Kubernetes objects that you can use to define and manage your application's infrastructure and resources. 
Here are some of the essential Kubernetes objects, along with their relations and a brief overview of how they work:

Pod:  
        - A Pod is the smallest and simplest unit in the Kubernetes object model.  
        - It represents a running process or a set of tightly coupled processes running on a node.  
        - Pods can contain one or more containers that share resources, including IP address and storage volumes.  
        - Pods are scheduled and managed by the Kubernetes scheduler.  

Service:  
        - A Service defines a set of Pods and provides a stable network endpoint for accessing them.  
        - It abstracts the underlying Pod instances and allows you to expose your application internally or externally.  
        - Services can be defined as ClusterIP, NodePort, LoadBalancer, or ExternalName, depending on the desired access type.  

ReplicaSet:  
        - A ReplicaSet ensures that a specified number of Pod replicas are running at all times.  
        - It is responsible for maintaining the desired state by creating or deleting Pods as necessary.  
        - ReplicaSets can be used for scaling and load balancing your application.  
        
Deployment:  
        - A Deployment provides declarative updates for Pods and ReplicaSets.  
        - It allows you to create and manage ReplicaSets, making it easier to perform rolling updates and rollbacks.  
        - Deployments ensure the desired state of your application is maintained over time.  

StatefulSet:  
        - A StatefulSet is used to manage stateful applications that require stable network identities and persistent storage.  
        - It ensures that each Pod in the set has a unique identity and that data is persisted across Pod restarts or rescheduling.  

DaemonSet:  
        - A DaemonSet ensures that a copy of a Pod is running on each node in the cluster.  
        - It is typically used for system-level services or agents that need to run on every node, such as log collectors or monitoring agents.  

Job:  
        - A Job creates one or more Pods and ensures that a specified number of them successfully complete.  
        - Jobs are useful for running batch or one-time tasks, such as data processing or backups.  

CronJob:  
        - A CronJob is similar to a Job, but it allows you to schedule and automate tasks at fixed intervals using cron-like syntax.  
        - CronJobs are commonly used for recurring jobs like periodic data synchronization or report generation.  

Namespace:  
        - A Namespace provides a way to organize and isolate resources within a cluster.  
        - It allows you to create virtual clusters within a physical cluster, helping to separate and manage different environments or projects.  

ConfigMap:  
        - A ConfigMap is used to store configuration data that can be consumed by Pods or other resources.  
        - It provides a way to decouple configuration from application code, making it easier to manage and update configurations.  

Secret:  
        - A Secret is similar to a ConfigMap but is specifically designed for storing sensitive data like passwords, tokens, or API keys.  
        - Secrets are base64 encoded and can be used by Pods or other resources securely.  


Volumes:   
        Volumes are objects whose purpose is to provide storage to pods. There are two basic types of volumes in Kubernetes.  
        Ephemeral volumes persist only during the lifetime of the pod they are tied to.  
        PersistentVolume (PV) and PersistentVolumeClaim (PVC):     
                - A PersistentVolume is a piece of networked storage in the cluster that can be used by Pods.  
                - A PersistentVolumeClaim is a request for a specific amount and type of storage.  
                - PVCs bind to PVs and provide a way for Pods to request and use persistent storage.  

StorageClass:  
        - A StorageClass defines different storage configurations (e.g., type, access mode) that can be used to dynamically provision PersistentVolumes.  
        - It allows for more flexible and automated provisioning of storage resources.  

Ingress:  
        - An Ingress provides external access to services within a cluster.  
        - It acts as a traffic router and can perform SSL termination, load balancing, and routing based on hostnames or paths.  

NetworkPolicy:  
        - A NetworkPolicy allows you to define network access rules between Pods.  
        - It provides fine-grained control over network traffic, allowing you to set ingress and egress rules based on IP addresses, ports, or labels.  

HorizontalPodAutoscaler (HPA):  
        - An HPA automatically scales the number of replicas in a Deployment, ReplicaSet, or StatefulSet based on CPU utilization or custom metrics.  
        - It ensures that the desired level of resource utilization is maintained.  

ServiceAccount:  
        - A ServiceAccount provides an identity for Pods to authenticate and interact with other cluster resources.  
        - It is used to control access and permissions within the cluster.  
