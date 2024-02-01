import { G as V } from "./layout-69c3f30d.js";
import { o as L, l as y, p as q, c as C, f as D, q as $, n as E, j as _, u as F, r as P, v as M } from "./mermaid-b08fd25b.js";
import { r as R } from "./index-54807e62.js";
import { b as U, s as H, f as W } from "./add-html-label-38cc67c7.js";
const I = {}, X = function(t) {
  const n = Object.keys(t);
  for (const k of n)
    I[k] = t[k];
}, G = function(t, n, k, i, s, f) {
  const p = i.select(`[id="${k}"]`);
  Object.keys(t).forEach(function(c) {
    const l = t[c];
    let h = "default";
    l.classes.length > 0 && (h = l.classes.join(" ")), h = h + " flowchart-label";
    const u = L(l.styles);
    let e = l.text !== void 0 ? l.text : l.id, o;
    if (y.info("vertex", l, l.labelType), l.labelType === "markdown")
      y.info("vertex", l, l.labelType);
    else if (q(C().flowchart.htmlLabels)) {
      const m = {
        label: e.replace(
          /fa[blrs]?:fa-[\w-]+/g,
          (g) => `<i class='${g.replace(":", " ")}'></i>`
        )
      };
      o = U(p, m).node(), o.parentNode.removeChild(o);
    } else {
      const m = s.createElementNS("http://www.w3.org/2000/svg", "text");
      m.setAttribute("style", u.labelStyle.replace("color:", "fill:"));
      const g = e.split(D.lineBreakRegex);
      for (const T of g) {
        const S = s.createElementNS("http://www.w3.org/2000/svg", "tspan");
        S.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), S.setAttribute("dy", "1em"), S.setAttribute("x", "1"), S.textContent = T, m.appendChild(S);
      }
      o = m;
    }
    let d = 0, r = "";
    switch (l.type) {
      case "round":
        d = 5, r = "rect";
        break;
      case "square":
        r = "rect";
        break;
      case "diamond":
        r = "question";
        break;
      case "hexagon":
        r = "hexagon";
        break;
      case "odd":
        r = "rect_left_inv_arrow";
        break;
      case "lean_right":
        r = "lean_right";
        break;
      case "lean_left":
        r = "lean_left";
        break;
      case "trapezoid":
        r = "trapezoid";
        break;
      case "inv_trapezoid":
        r = "inv_trapezoid";
        break;
      case "odd_right":
        r = "rect_left_inv_arrow";
        break;
      case "circle":
        r = "circle";
        break;
      case "ellipse":
        r = "ellipse";
        break;
      case "stadium":
        r = "stadium";
        break;
      case "subroutine":
        r = "subroutine";
        break;
      case "cylinder":
        r = "cylinder";
        break;
      case "group":
        r = "rect";
        break;
      case "doublecircle":
        r = "doublecircle";
        break;
      default:
        r = "rect";
    }
    n.setNode(l.id, {
      labelStyle: u.labelStyle,
      shape: r,
      labelText: e,
      labelType: l.labelType,
      rx: d,
      ry: d,
      class: h,
      style: u.style,
      id: l.id,
      link: l.link,
      linkTarget: l.linkTarget,
      tooltip: f.db.getTooltip(l.id) || "",
      domId: f.db.lookUpDomId(l.id),
      haveCallback: l.haveCallback,
      width: l.type === "group" ? 500 : void 0,
      dir: l.dir,
      type: l.type,
      props: l.props,
      padding: C().flowchart.padding
    }), y.info("setNode", {
      labelStyle: u.labelStyle,
      labelType: l.labelType,
      shape: r,
      labelText: e,
      rx: d,
      ry: d,
      class: h,
      style: u.style,
      id: l.id,
      domId: f.db.lookUpDomId(l.id),
      width: l.type === "group" ? 500 : void 0,
      type: l.type,
      dir: l.dir,
      props: l.props,
      padding: C().flowchart.padding
    });
  });
}, z = function(t, n, k) {
  y.info("abc78 edges = ", t);
  let i = 0, s = {}, f, p;
  if (t.defaultStyle !== void 0) {
    const a = L(t.defaultStyle);
    f = a.style, p = a.labelStyle;
  }
  t.forEach(function(a) {
    i++;
    const c = "L-" + a.start + "-" + a.end;
    s[c] === void 0 ? (s[c] = 0, y.info("abc78 new entry", c, s[c])) : (s[c]++, y.info("abc78 new entry", c, s[c]));
    let l = c + "-" + s[c];
    y.info("abc78 new link id to be used is", c, l, s[c]);
    const h = "LS-" + a.start, u = "LE-" + a.end, e = { style: "", labelStyle: "" };
    switch (e.minlen = a.length || 1, a.type === "arrow_open" ? e.arrowhead = "none" : e.arrowhead = "normal", e.arrowTypeStart = "arrow_open", e.arrowTypeEnd = "arrow_open", a.type) {
      case "double_arrow_cross":
        e.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        e.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        e.arrowTypeStart = "arrow_point";
      case "arrow_point":
        e.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        e.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        e.arrowTypeEnd = "arrow_circle";
        break;
    }
    let o = "", d = "";
    switch (a.stroke) {
      case "normal":
        o = "fill:none;", f !== void 0 && (o = f), p !== void 0 && (d = p), e.thickness = "normal", e.pattern = "solid";
        break;
      case "dotted":
        e.thickness = "normal", e.pattern = "dotted", e.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        e.thickness = "thick", e.pattern = "solid", e.style = "stroke-width: 3.5px;fill:none;";
        break;
      case "invisible":
        e.thickness = "invisible", e.pattern = "solid", e.style = "stroke-width: 0;fill:none;";
        break;
    }
    if (a.style !== void 0) {
      const r = L(a.style);
      o = r.style, d = r.labelStyle;
    }
    e.style = e.style += o, e.labelStyle = e.labelStyle += d, a.interpolate !== void 0 ? e.curve = $(a.interpolate, E) : t.defaultInterpolate !== void 0 ? e.curve = $(t.defaultInterpolate, E) : e.curve = $(I.curve, E), a.text === void 0 ? a.style !== void 0 && (e.arrowheadStyle = "fill: #333") : (e.arrowheadStyle = "fill: #333", e.labelpos = "c"), e.labelType = a.labelType, e.label = a.text.replace(D.lineBreakRegex, `
`), a.style === void 0 && (e.style = e.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), e.labelStyle = e.labelStyle.replace("color:", "fill:"), e.id = l, e.classes = "flowchart-link " + h + " " + u, n.setEdge(a.start, a.end, e, i);
  });
}, J = function(t, n) {
  return n.db.getClasses();
}, K = async function(t, n, k, i) {
  y.info("Drawing flowchart");
  let s = i.db.getDirection();
  s === void 0 && (s = "TD");
  const { securityLevel: f, flowchart: p } = C(), a = p.nodeSpacing || 50, c = p.rankSpacing || 50;
  let l;
  f === "sandbox" && (l = _("#i" + n));
  const h = f === "sandbox" ? _(l.nodes()[0].contentDocument.body) : _("body"), u = f === "sandbox" ? l.nodes()[0].contentDocument : document, e = new V({
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
  for (let b = d.length - 1; b >= 0; b--)
    o = d[b], y.info("Subgraph - ", o), i.db.addVertex(
      o.id,
      { text: o.title, type: o.labelType },
      "group",
      void 0,
      o.classes,
      o.dir
    );
  const r = i.db.getVertices(), m = i.db.getEdges();
  y.info("Edges", m);
  let g = 0;
  for (g = d.length - 1; g >= 0; g--) {
    o = d[g], H("cluster").append("text");
    for (let b = 0; b < o.nodes.length; b++)
      y.info("Setting up subgraphs", o.nodes[b], o.id), e.setParent(o.nodes[b], o.id);
  }
  G(r, e, n, h, u, i), z(m, e);
  const T = h.select(`[id="${n}"]`), S = h.select("#" + n + " g");
  if (await R(S, e, ["point", "circle", "cross"], "flowchart", n), F.insertTitle(T, "flowchartTitleText", p.titleTopMargin, i.db.getDiagramTitle()), P(e, T, p.diagramPadding, p.useMaxWidth), i.db.indexNodes("subGraph" + g), !p.htmlLabels) {
    const b = u.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
    for (const x of b) {
      const v = x.getBBox(), w = u.createElementNS("http://www.w3.org/2000/svg", "rect");
      w.setAttribute("rx", 0), w.setAttribute("ry", 0), w.setAttribute("width", v.width), w.setAttribute("height", v.height), x.insertBefore(w, x.firstChild);
    }
  }
  Object.keys(r).forEach(function(b) {
    const x = r[b];
    if (x.link) {
      const v = _("#" + n + ' [id="' + b + '"]');
      if (v) {
        const w = u.createElementNS("http://www.w3.org/2000/svg", "a");
        w.setAttributeNS("http://www.w3.org/2000/svg", "class", x.classes.join(" ")), w.setAttributeNS("http://www.w3.org/2000/svg", "href", x.link), w.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener"), f === "sandbox" ? w.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top") : x.linkTarget && w.setAttributeNS("http://www.w3.org/2000/svg", "target", x.linkTarget);
        const N = v.insert(function() {
          return w;
        }, ":first-child"), A = v.select(".label-container");
        A && N.append(function() {
          return A.node();
        });
        const B = v.select(".label");
        B && N.append(function() {
          return B.node();
        });
      }
    }
  });
}, le = {
  setConf: X,
  addVertices: G,
  addEdges: z,
  getClasses: J,
  draw: K
}, Q = (t, n) => {
  const k = W, i = k(t, "r"), s = k(t, "g"), f = k(t, "b");
  return M(i, s, f, n);
}, Y = (t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span,p {
    color: ${t.titleColor};
  }

  .label text,span,p {
    fill: ${t.nodeTextColor || t.textColor};
    color: ${t.nodeTextColor || t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
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
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${Q(t.edgeLabelBackground, 0.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span,p {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`, re = Y;
export {
  re as a,
  le as f
};
