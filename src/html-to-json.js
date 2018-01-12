const htmlStr = process.argv[2];
const DOMParser = require('xmldom').DOMParser;
const fs = require('fs');
const doctypeRemoved = htmlStr.replace(/\<!DOCTYPE.+?\>/g,'');
const extraStringRemoved = doctypeRemoved.trim();

console.log('@@@ html-to-json argv : ',process.argv);

console.log('@@@ extraStringRemoved : ', JSON.stringify(extraStringRemoved));

function mapDOM(element, json) {
  let treeObject = {};
  let parser;
  let docNode;

  // If string convert to document Node
  if (typeof element === "string") {
    if (DOMParser) {
      parser = new DOMParser();
      docNode = parser.parseFromString(element, "text/xml");
    } else {
      console.error('DOMParser required');
    }
    element = docNode.firstChild;
  } else {
    console.log('Input is not a string, It is a ', typeof element);
  }

  //Recursively loop through DOM elements and assign properties to object
  function treeHTML(element, object) {
    object["type"] = element.nodeName;
    let nodeList = element.childNodes;
    if (nodeList !== null) {
      if (nodeList.length) {
        object["content"] = [];
        for (let i = 0; i < nodeList.length; i++) {
          if (nodeList[i].nodeType === 3) {
            object["content"].push(nodeList[i].nodeValue);
          } else {
            object["content"].push({});
            treeHTML(nodeList[i], object["content"][object["content"].length - 1]);
          }
        }
      }
    }
    if (element.attributes !== null) {
      if (element.attributes.length) {
        object["attributes"] = {};
        for (let i = 0; i < element.attributes.length; i++) {
          object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
        }
      }
    }
  }

  treeHTML(element, treeObject);

  return (json) ? JSON.stringify(treeObject) : treeObject;
}

const jsonFromHtml = mapDOM(extraStringRemoved, true);

console.log('@@@ jsonFromHtml : ', jsonFromHtml);

fs.writeFile('/tmp/dom-map.json',jsonFromHtml,function(err){
  if(err){
    console.error('err at writing dom-map.json');
  }else{
    console.log('write dom-map.json successfully');
  }
});

