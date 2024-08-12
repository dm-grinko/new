#!/bin/bash

# Assign arguments to variables
workdir=$1
appName=$2
MYSQL_USER=$3
MYSQL_PASSWORD=$4
MYSQL_DATABASE=$5
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
    image: mysql:latest
    container_name: mysql_db
    environment:
      MYSQL_USER: $MYSQL_USER
      MYSQL_PASSWORD: $MYSQL_PASSWORD
      MYSQL_DATABASE: $MYSQL_DATABASE
      MYSQL_ROOT_PASSWORD: $MYSQL_PASSWORD
    ports:
      - "$PORT:3306"
    volumes:
      - mysql_data:/var/lib/mysql

volumes:
  mysql_data:
EOF

# Run Docker Compose to start the MySQL container
docker-compose up -d

echo "MySQL database is now running on port $PORT."
echo "Database: $MYSQL_DATABASE"
echo "Username: $MYSQL_USER"
echo "Password: $MYSQL_PASSWORD"
