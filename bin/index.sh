#!/bin/bash

HTML_PATH=$1
TEST_FLAG=$2
if [[ "$2" = "test" ]]
then
    echo "@@@ onesrc >> this is test"
    ONESRC_PATH=.
else
    ONESRC_PATH=/usr/local/lib/node_modules/one-src
fi

echo "@@@ onesrc >> start to make a js file from given HTML file."

# make dom-map.json from the HTML file
node $ONESRC_PATH/src/html-to-json.js "`cat $1`"

# make js file by combining dom-map.json and dom-builder.min.js
echo "var __one_src_map = `cat /tmp/dom-map.json`;`cat $ONESRC_PATH/src/dom-builder.min.js`" > ./$(basename $1).onesrc.js

# delete dom-map.json
rm /tmp/dom-map.json

echo "@@@ onesrc >> done"


