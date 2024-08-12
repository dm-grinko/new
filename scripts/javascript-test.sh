#!/bin/bash
workdir=$1

cd $1

FILE="javascript-test.js"

if [ -f "$FILE" ]; then
    code "$FILE"
else
    touch "$FILE"
    code "$FILE"
fi

nodemon "$FILE"