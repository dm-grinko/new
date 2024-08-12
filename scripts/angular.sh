#!/bin/bash
workdir=$1
appName=$2
style=${3:-css}
routing=${4:-false}
strict=${5:-true}
skipTests=${6:-false}
prefix=${7:-app}
viewEncapsulation=${8:-None}
skipGit=${9:-false}
inlineStyle=${10:-false}
inlineTemplate=${11:-false}
packageManager=${12:-npm}

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

# Generate the Angular app with the specified options
ng new $appName \
    --directory . \
    --style=$style \
    --routing=$routing \
    --strict=$strict \
    --skip-tests=$skipTests \
    --prefix=$prefix \
    --view-encapsulation=$viewEncapsulation \
    --skip-git=$skipGit \
    --inline-style=$inlineStyle \
    --inline-template=$inlineTemplate \
    --package-manager=$packageManager \
    --skip-install

echo "Angular app '$appName' created successfully."

# Install dependencies
npm install

echo "Dependencies installed successfully."

# Done
echo "Your Angular app '$appName' is ready."

code .

npm start
