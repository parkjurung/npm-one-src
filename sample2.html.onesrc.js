var __one_src_map = {
  "type": "html",
  "content": ["\n", {
    "type": "head",
    "content": ["\n  ", {"type": "meta", "attributes": {"charset": "utf-8"}}, "\n  ", {
      "type": "title",
      "content": ["pplink 3.0"]
    }, "\n  ", {"type": "base", "attributes": {"href": "/"}}, "\n  ", {
      "type": "meta",
      "attributes": {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
      }
    }, "\n  ", {
      "type": "script",
      "attributes": {"src": "https://use.fortawesome.com/36c2cc36.js"}
    }, "\n  ", {
      "type": "link",
      "attributes": {"rel": "icon", "type": "image/x-icon", "href": "favicon.ico"}
    }, "\n  ", {
      "type": "link",
      "attributes": {"href": "cdn/pplink_canvas_app/1.4/styles.d7ad35e1c7d8705e151f.bundle.css", "rel": "stylesheet"}
    }, "\n"]
  }, "\n", {
    "type": "body",
    "content": ["\n", {"type": "app-root"}, "\n", {
      "type": "script",
      "attributes": {
        "type": "text/javascript",
        "src": "cdn/pplink_canvas_app/1.4/inline.bcd42f2cfa1b374d2234.bundle.js"
      }
    }, "\n", {
      "type": "script",
      "attributes": {
        "type": "text/javascript",
        "src": "cdn/pplink_canvas_app/1.4/polyfills.2125241812344753088f.bundle.js"
      }
    }, "\n", {
      "type": "script",
      "attributes": {"type": "text/javascript", "src": "cdn/pplink_canvas_app/1.4/main.64795698c3a1a3e39df0.bundle.js"}
    }, "\n"]
  }, "\n"],
  "attributes": {"lang": "en"}
};
!function (e, t) {
  t || console.error("global variable 'window' is needed");
  var n = t.document, o = function (e, t) {
    var r = function (e) {
      var t, n, o, r = typeof e;
      return "string" === r ? o = document.createTextNode(e) : "object" === r && e ? "html" === (t = e.type) || "head" === t || "body" === t ? (n = document.getElementsByTagName(t)[0]) ? (console.log("node exists :", t), o = n) : (console.log("node not exists :", t), o = document.createElement(t)) : o = document.createElement(t) : (o = document.createTextNode("null"), console.error("unexpected elemType : " + r)), e && e.attributes && function (e, t) {
        for (var n in t) e.setAttribute(n, t[n])
      }(o, e.attributes), o
    }(e), c = e.content;
    for (var a in c) o(c[a], r);
    t !== n && t.appendChild(r)
  };
  o(e, n)
}(__one_src_map, window);
