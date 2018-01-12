#!/bin/bash

HTML_PATH=$1

echo "@@@ start to make a js file from given HTML file."

# make dom-map.json from the HTML file
node /usr/local/lib/node_modules/one-src/src/html-to-json.js "`cat $1`"

# make js file by combining dom-map.json and dom-builder.min.js
echo "var __one_src_map = `cat /tmp/dom-map.json`;`cat /usr/local/lib/node_modules/one-src/src/dom-builder.min.js`" > ./result.js


