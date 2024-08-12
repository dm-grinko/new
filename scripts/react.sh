#!/bin/bash
workdir=$1
appName=$2
template=$3


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


