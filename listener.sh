#!/bin/bash

# List of services to force update
services=("app_api" "app_celery" "app_celery-beat" "app_celery-flower" "app_certbot" "app_channels" "app_client" "app_db" "app_nginx" "app_redis")

# Function to force update services
force_update_services() {
  for service in "${services[@]}"; do
    echo "Force updating service: $service"
    docker service update --force $service
  done
}

# Simple TCP server to listen for node-up notifications
while true; do
  echo "$(date) - Waiting for incoming connections on port 5430..."
  # Listen for incoming connections on port 5430 with disabchm
    echo "Node $node has come back up. Force updating services..."
    force_update_services
  else
    echo "Received invalid request."
  fi
done
