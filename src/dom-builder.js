(function (map, window) {
  // html, head, body는 원래 있던 걸 쓴다.
  if (!window) console.error('global variable \'window\' is needed');

  var rootNode = window.document;

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
      if (elemTag === 'html' || elemTag === 'head' || elemTag === 'body') {
        existingNode = document.getElementsByTagName(elemTag)[0];
        if (existingNode) {
          currentNode = existingNode;
        } else {
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

    if(parentNode !== rootNode){
      parentNode.appendChild(currentNode);
    }
  };

  createNode(map, rootNode);
})(__one_src_map, window);
