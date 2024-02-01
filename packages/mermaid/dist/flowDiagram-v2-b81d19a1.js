import { p as q, f as $ } from "./flowDb-4b2e299b.js";
import { G as F } from "./layout-69c3f30d.js";
import { o as L, l as y, p as P, c as C, f as I, q as A, n as E, j as _, u as R, r as U, v as H, t as W } from "./mermaid-b08fd25b.js";
import { r as X } from "./index-54807e62.js";
import { b as J, s as K, f as Q } from "./add-html-label-38cc67c7.js";
import "./edges-ddad6e3a.js";
import "./createText-bf944b7b.js";
import "./line-422797b4.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
const z = {}, Y = function(e) {
  const n = Object.keys(e);
  for (const k of n)
    z[k] = e[k];
}, M = function(e, n, k, i, s, b) {
  const p = i.select(`[id="${k}"]`);
  Object.keys(e).forEach(function(c) {
    const r = e[c];
    let h = "default";
    r.classes.length > 0 && (h = r.classes.join(" ")), h = h + " flowchart-label";
    const u = L(r.styles);
    let t = r.text !== void 0 ? r.text : r.id, o;
    if (y.info("vertex", r, r.labelType), r.labelType === "markdown")
      y.info("vertex", r, r.labelType);
    else if (P(C().flowchart.htmlLabels)) {
      const m = {
        label: t.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (g) => `<i class='${g.replace(":", " ")}'></i>`
        )
      };
      o = J(p, m).node(), o.parentNode.removeChild(o);
    } else {
      const m = s.createElementNS("http://www.w3.org/2000/svg", "text");
      m.setAttribute("style", u.labelStyle.replace("color:", "fill:"));
      const g = t.split(I.lineBreakRegex);
      for (const T of g) {
        const S = s.createElementNS("http://www.w3.org/2000/svg", "tspan");
        S.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), S.setAttribute("dy", "1em"), S.setAttribute("x", "1"), S.textContent = T, m.appendChild(S);
      }
      o = m;
    }
    let d = 0, l = "";
    switch (r.type) {
      case "round":
        d = 5, l = "rect";
        break;
      case "square":
        l = "rect";
        break;
      case "diamond":
        l = "question";
        break;
      case "hexagon":
        l = "hexagon";
        break;
      case "odd":
        l = "rect_left_inv_arrow";
        break;
      case "lean_right":
        l = "lean_right";
        break;
      case "lean_left":
        l = "lean_left";
        break;
      case "trapezoid":
        l = "trapezoid";
        break;
      case "inv_trapezoid":
        l = "inv_trapezoid";
        break;
      case "odd_right":
        l = "rect_left_inv_arrow";
        break;
      case "circle":
        l = "circle";
        break;
      case "ellipse":
        l = "ellipse";
        break;
      case "stadium":
        l = "stadium";
        break;
      case "subroutine":
        l = "subroutine";
        break;
      case "cylinder":
        l = "cylinder";
        break;
      case "group":
        l = "rect";
        break;
      case "doublecircle":
        l = "doublecircle";
        break;
      default:
        l = "rect";
    }
    n.setNode(r.id, {
      labelStyle: u.labelStyle,
      shape: l,
      labelText: t,
      labelType: r.labelType,
      rx: d,
      ry: d,
      class: h,
      style: u.style,
      id: r.id,
      link: r.link,
      linkTarget: r.linkTarget,
      tooltip: b.db.getTooltip(r.id) || "",
      domId: b.db.lookUpDomId(r.id),
      haveCallback: r.haveCallback,
      width: r.type === "group" ? 500 : void 0,
      dir: r.dir,
      type: r.type,
      props: r.props,
      padding: C().flowchart.padding
    }), y.info("setNode", {
      labelStyle: u.labelStyle,
      labelType: r.labelType,
      shape: l,
      labelText: t,
      rx: d,
      ry: d,
      class: h,
      style: u.style,
      id: r.id,
      domId: b.db.lookUpDomId(r.id),
      width: r.type === "group" ? 500 : void 0,
      type: r.type,
      dir: r.dir,
      props: r.props,
      padding: C().flowchart.padding
    });
  });
}, V = function(e, n, k) {
  y.info("abc78 edges = ", e);
  let i = 0, s = {}, b, p;
  if (e.defaultStyle !== void 0) {
    const a = L(e.defaultStyle);
    b = a.style, p = a.labelStyle;
  }
  e.forEach(function(a) {
    i++;
    const c = "L-" + a.start + "-" + a.end;
    s[c] === void 0 ? (s[c] = 0, y.info("abc78 new entry", c, s[c])) : (s[c]++, y.info("abc78 new entry", c, s[c]));
    let r = c + "-" + s[c];
    y.info("abc78 new link id to be used is", c, r, s[c]);
    const h = "LS-" + a.start, u = "LE-" + a.end, t = { style: "", labelStyle: "" };
    switch (t.minlen = a.length || 1, a.type === "arrow_open" ? t.arrowhead = "none" : t.arrowhead = "normal", t.arrowTypeStart = "arrow_open", t.arrowTypeEnd = "arrow_open", a.type) {
      case "double_arrow_cross":
        t.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        t.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        t.arrowTypeStart = "arrow_point";
      case "arrow_point":
        t.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        t.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        t.arrowTypeEnd = "arrow_circle";
        break;
    }
    let o = "", d = "";
    switch (a.stroke) {
      case "normal":
        o = "fill:none;", b !== void 0 && (o = b), p !== void 0 && (d = p), t.thickness = "normal", t.pattern = "solid";
        break;
      case "dotted":
        t.thickness = "normal", t.pattern = "dotted", t.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        t.thickness = "thick", t.pattern = "solid", t.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        t.thickness = "invisible", t.pattern = "solid", t.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (a.style !== void 0) {
      const l = L(a.style);
      o = l.style, d = l.labelStyle;
    }
    t.style = t.style += o, t.labelStyle = t.labelStyle += d, a.interpolate !== void 0 ? t.curve = A(a.interpolate, E) : e.defaultInterpolate !== void 0 ? t.curve = A(e.defaultInterpolate, E) : t.curve = A(z.curve, E), a.text === void 0 ? a.style !== void 0 && (t.arrowheadStyle = "fill: #333") : (t.arrowheadStyle = "fill: #333", t.labelpos = "c"), t.labelType = a.labelType, t.label = a.text.replace(I.lineBreakRegex, `
`), a.style === void 0 && (t.style = t.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), t.labelStyle = t.labelStyle.replace("color:", "fill:"), t.id = r, t.classes = "flowchart-link " + h + " " + u, n.setEdge(a.start, a.end, t, i);
  });
}, Z = function(e, n) {
  return n.db.getClasses();
}, j = async function(e, n, k, i) {
  y.info("Drawing flowchart");
  let s = i.db.getDirection();
  s === void 0 && (s = "TD");
  const { securityLevel: b, flowchart: p } = C(), a = p.nodeSpacing || 50, c = p.rankSpacing || 50;
  let r;
  b === "sandbox" && (r = _("#i" + n));
  const h = b === "sandbox" ? _(r.nodes()[0].contentDocument.body) : _("body"), u = b === "sandbox" ? r.nodes()[0].contentDocument : document, t = new F({
    multigraph: !0,
    compound: !0
  }).setGraph({
    rankdir: s,
    nodesep: a,
    ranksep: c,
    marginx: 0,
    marginy: 0
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  let o;
  const d = i.db.getSubGraphs();
  y.info("Subgraphs - ", d);
  for (let f = d.length - 1; f >= 0; f--)
    o = d[f], y.info("Subgraph - ", o), i.db.addVertex(
      o.id,
      { text: o.title, type: o.labelType },
      "group",
      void 0,
      o.classes,
      o.dir
    );
  const l = i.db.getVertices(), m = i.db.getEdges();
  y.info("Edges", m);
  let g = 0;
  for (g = d.length - 1; g >= 0; g--) {
    o = d[g], K("cluster").append("text");
    for (let f = 0; f < o.nodes.length; f++)
      y.info("Setting up subgraphs", o.nodes[f], o.id), t.setParent(o.nodes[f], o.id);
  }
  M(l, t, n, h, u, i), V(m, t);
  const T = h.select(`[id="${n}"]`), S = h.select("#" + n + " g");
  if (await X(S, t, ["point", "circle", "cross"], "flowchart", n), R.insertTitle(T, "flowchartTitleText", p.titleTopMargin, i.db.getDiagramTitle()), U(t, T, p.diagramPadding, p.useMaxWidth), i.db.indexNodes("subGraph" + g), !p.htmlLabels) {
    const f = u.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
    for (const x of f) {
      const v = x.getBBox(), w = u.createElementNS("http://www.w3.org/2000/svg", "rect");
      w.setAttribute("rx", 0), w.setAttribute("ry", 0), w.setAttribute("width", v.width), w.setAttribute("height", v.height), x.insertBefore(w, x.firstChild);
    }
  }
  Object.keys(l).forEach(function(f) {
    const x = l[f];
    if (x.link) {
      const v = _("#" + n + ' [id="' + f + '"]');
      if (v) {
        const w = u.createElementNS("http://www.w3.org/2000/svg", "a");
        w.setAttributeNS("http://www.w3.org/2000/svg", "class", x.classes.join(" ")), w.setAttributeNS("http://www.w3.org/2000/svg", "href", x.link), w.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), b === "sandbox" ? w.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : x.linkTarget && w.setAttributeNS("http://www.w3.org/2000/svg", "target", x.linkTarget);
        const N = v.insert(function() {
          return w;
        }, ":first-child"), B = v.select(".label-container");
        B && N.append(function() {
          return B.node();
        });
        const D = v.select(".label");
        D && N.append(function() {
          return D.node();
        });
      }
    }
  });
}, G = {
  setConf: Y,
  addVertices: M,
  addEdges: V,
  getClasses: Z,
  draw: j
}, O = (e, n) => {
  const k = Q, i = k(e, "r"), s = k(e, "g"), b = k(e, "b");
  return H(i, s, b, n);
}, ee = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor || e.textColor};
    color: ${e.nodeTextColor || e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${O(e.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`, te = ee, pe = {
  parser: q,
  db: $,
  renderer: G,
  styles: te,
  init: (e) => {
    e.d3fend || (e.d3fend = {}), e.d3fend.arrowMarkerAbsolute = e.arrowMarkerAbsolute, W({ flowchart: { arrowMarkerAbsolute: e.arrowMarkerAbsolute } }), G.setConf(e.d3fend), $.clear(), $.setGen("gen-2");
  }
};
export {
  pe as diagram
};
