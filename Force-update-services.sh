#!/bin/bash

# Name of the Docker stack
STACK_NAME="app"

# Get the list of services in the stack
services=$(docker stack services --format '{{.Name}}' $STACK_NAME)

# Force update each service
for service in $services; do
    echo "Forcing update for service $service..."
    docker service update --force $service
    echo "Service $service has been force updated."
done

