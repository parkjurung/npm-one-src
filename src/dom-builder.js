(function (map, window) {
  if (!window) console.error('global variable \'window\' is needed');

  var rootNode = window.document;
  var scriptQueue = [];

  var setAttribute = function (currentNode, attributes) {
    for (var attrName in attributes) {
      currentNode.setAttribute(attrName, attributes[attrName]);
    }
  };

  var makeCurrentNode = function (elem) {
    var elemType = typeof elem;
    var elemTag;
    var existingNode;
    var currentNode;

    if (elemType === 'string') {
      currentNode = document.createTextNode(elem);
    } else if (elemType === 'object' && elem) {
      elemTag = elem.type;
      // html, head, body는 원래 있던 걸 쓴다.
      if (elemTag === 'html' || elemTag === 'head' || elemTag === 'body') {
        existingNode = document.getElementsByTagName(elemTag)[0];
        if (existingNode) {
          console.log('node exists :', elemTag);
          currentNode = existingNode;
        } else {
          console.log('node not exists :', elemTag);
          currentNode = document.createElement(elemTag);
        }
      } else {
        currentNode = document.createElement(elemTag);
      }
    } else {
      currentNode = document.createTextNode('null');
      console.error('unexpected elemType : ' + elemType);
    }

    if (elem && elem.attributes) {
      setAttribute(currentNode, elem.attributes);
    }

    return currentNode;
  };

  var createNode = function (elem, parentNode) {
    var currentNode = makeCurrentNode(elem);
    var childElems = elem.content;

    for (var idx in childElems) {
      createNode(childElems[idx], currentNode);
    }

    if (currentNode.tagName === 'SCRIPT') { // script
      scriptQueue.push({parentNode: parentNode, currentNode: currentNode});
    } else {
      if (parentNode !== rootNode) {
        parentNode.appendChild(currentNode);
      }
    }
  };

  var appendScripts = function () {
    for (var i = 0; i < scriptQueue.length-1; i++) {
      (function(idx){
        scriptQueue[idx].currentNode.onload = function(){scriptQueue[idx+1].parentNode.appendChild(scriptQueue[idx+1].currentNode)};
      })(i);
    }
    if(scriptQueue[0]){
      scriptQueue[0].parentNode.appendChild(scriptQueue[0].currentNode);
    }
  };

  createNode(map, rootNode);
  appendScripts();
})(__one_src_map, window);
