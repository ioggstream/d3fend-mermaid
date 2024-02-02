import { ai as Selection, aj as root, ak as array, al as _, am as Color, an as isPlainObject, ao as isFunction } from "./mermaid-e1024899.js";
function selectAll(selector) {
  return typeof selector === "string" ? new Selection([document.querySelectorAll(selector)], [document.documentElement]) : new Selection([array(selector)], root);
}
const channel = (color, channel2) => {
  return _.lang.round(Color.parse(color)[channel2]);
};
const channel$1 = channel;
function isSubgraph(g, v) {
  return !!g.children(v).length;
}
function edgeToId(e) {
  return escapeId(e.v) + ":" + escapeId(e.w) + ":" + escapeId(e.name);
}
var ID_DELIM = /:/g;
function escapeId(str) {
  return str ? String(str).replace(ID_DELIM, "\\:") : "";
}
function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
function applyClass(dom, classFn, otherClasses) {
  if (classFn) {
    dom.attr("class", classFn).attr("class", otherClasses + " " + dom.attr("class"));
  }
}
function applyTransition(selection, g) {
  var graph = g.graph();
  if (isPlainObject(graph)) {
    var transition = graph.transition;
    if (isFunction(transition)) {
      return transition(selection);
    }
  }
  return selection;
}
function addHtmlLabel(root2, node) {
  var fo = root2.append("foreignObject").attr("width", "100000");
  var div = fo.append("xhtml:div");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  var label = node.label;
  switch (typeof label) {
    case "function":
      div.insert(label);
      break;
    case "object":
      div.insert(function() {
        return label;
      });
      break;
    default:
      div.html(label);
  }
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  var client = div.node().getBoundingClientRect();
  fo.attr("width", client.width).attr("height", client.height);
  return fo;
}
export {
  applyStyle as a,
  addHtmlLabel as b,
  applyTransition as c,
  applyClass as d,
  edgeToId as e,
  channel$1 as f,
  isSubgraph as i,
  selectAll as s
};
