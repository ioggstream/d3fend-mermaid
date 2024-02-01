import { ai as s, aj as c, ak as o, al as u, am as p, an as f, ao as d } from "./mermaid-b08fd25b.js";
function m(t) {
  return typeof t == "string" ? new s([document.querySelectorAll(t)], [document.documentElement]) : new s([o(t)], c);
}
const h = (t, a) => u.lang.round(p.parse(t)[a]), y = h;
function v(t, a) {
  return !!t.children(a).length;
}
function S(t) {
  return i(t.v) + ":" + i(t.w) + ":" + i(t.name);
}
var g = /:/g;
function i(t) {
  return t ? String(t).replace(g, "\\:") : "";
}
function w(t, a) {
  a && t.attr("style", a);
}
function j(t, a, e) {
  a && t.attr("class", a).attr("class", e + " " + t.attr("class"));
}
function k(t, a) {
  var e = a.graph();
  if (f(e)) {
    var n = e.transition;
    if (d(n))
      return n(t);
  }
  return t;
}
function x(t, a) {
  var e = t.append("foreignObject").attr("width", "100000"), n = e.append("xhtml:div");
  n.attr("xmlns", "http://www.w3.org/1999/xhtml");
  var r = a.label;
  switch (typeof r) {
    case "function":
      n.insert(r);
      break;
    case "object":
      n.insert(function() {
        return r;
      });
      break;
    default:
      n.html(r);
  }
  w(n, a.labelStyle), n.style("display", "inline-block"), n.style("white-space", "nowrap");
  var l = n.node().getBoundingClientRect();
  return e.attr("width", l.width).attr("height", l.height), e;
}
export {
  w as a,
  x as b,
  k as c,
  j as d,
  S as e,
  y as f,
  v as i,
  m as s
};
