#!/bin/bash

rm -rf ./TestAMapView/node_modules/react-native-maps
packName=`npm pack`
cd ./TestAMapView
npm install ../$packName
cd ../

