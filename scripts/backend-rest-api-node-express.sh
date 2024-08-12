#!/bin/bash
workdir=$1
appName=$2

# Exit immediately if a command exits with a non-zero status
set -e

cd $workdir

if [ -d "$appName" ]; then
    echo "Folder '$appName' already exists"
    exit 1
fi

mkdir $appName

cd $appName

npm init -y

sed -i '' 's|"test": "echo \\"Error: no test specified\\" && exit 1"|"start": "node index.js"|' package.json
sed -i '' 's|"author": "",|"author": "Dmitry Grinko <dm.grinko@gmail.com>",|' package.json

npm install express

cat <<EOL > index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(\`Server is running on port \${port}\`);
});
EOL


code .

nodemon index.js