#!/bin/bash

# Function to force redistribution for a given service
force_redistribute() {
    local service_name="$1"
    echo "Not all worker nodes have a task for $service_name. Forcing redistribution..."
    docker service update --force $service_name
}

# Main script
while true; do
    # Get list of services in the stack
    services=$(docker service ls --format "{{.Name}}")

    # Iterate over each service
    for service_name in $services; do
        # Check if all worker nodes have a task for the service
        tasks=$(docker service ps -f "desired-state=running" $service_name --format "{{.Node}}")
        worker_nodes=$(docker node ls --filter "role=worker" --format "{{.Hostname}}")

        # Check if any worker node is missing tasks for the service
        all_nodes_have_tasks=true
        for node in $worker_nodes; do
            if ! echo "$tasks" | grep -q "$node"; then
                all_nodes_have_tasks=false
                break
            fi
        done

        # If not all nodes have tasks, force redistribution
        if [ "$all_nodes_have_tasks" = false ]; then
            force_redistribute "$service_name"
        fi
    done

    sleep 30  # Adjust sleep time as needed
done
