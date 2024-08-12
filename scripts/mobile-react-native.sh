#!/bin/bash
workdir=$1
appName=$2
template=$3
useNpm=$4

echo
echo "cd $workdir"
echo "npx create-react-native-app@latest $appName $template $useNpm"
echo

cd $workdir
npx create-react-native-app@latest $appName $template $useNpm
