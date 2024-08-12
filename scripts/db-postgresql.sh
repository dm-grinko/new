#!/bin/bash

# Assign arguments to variables
workdir=$1
appName=$2
POSTGRES_USER=$3
POSTGRES_PASSWORD=$4
POSTGRES_DB=$5
PORT=$6

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the working directory
cd $workdir

# Check if the app directory already exists
if [ -d "$appName" ]; then
    echo "Folder '$appName' already exists"
    exit 1
fi

# Create the app directory
mkdir $appName

# Navigate into the app directory
cd $appName

# Check if Docker and Docker Compose are installed
if ! command -v docker &> /dev/null; then
    echo "Docker could not be found. Please install Docker."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose could not be found. Please install Docker Compose."
    exit 1
fi

# Create a Docker Compose YAML file
cat <<EOF > docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:latest
    container_name: postgres_db
    environment:
      POSTGRES_USER: $POSTGRES_USER
      POSTGRES_PASSWORD: $POSTGRES_PASSWORD
      POSTGRES_DB: $POSTGRES_DB
    ports:
      - "$PORT:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
EOF

# Run Docker Compose to start the PostgreSQL container
docker-compose up -d

echo "PostgreSQL database is now running on port $PORT."
echo "Database: $POSTGRES_DB"
echo "Username: $POSTGRES_USER"
echo "Password: $POSTGRES_PASSWORD"
