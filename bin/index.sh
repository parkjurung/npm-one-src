#!/bin/bash

HTML_PATH=$1

echo "@@@ start to make a js file from given HTML file."

# make dom-map.json from the HtML file
node ../src/html-to-json.js
