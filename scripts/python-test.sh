#!/bin/bash
workdir=$1

cd $1

FILE="python-test.py"

if [ -f "$FILE" ]; then
    code "$FILE"
else
    touch "$FILE"
    code "$FILE"
fi

nodemon --exec python3 "$FILE"
