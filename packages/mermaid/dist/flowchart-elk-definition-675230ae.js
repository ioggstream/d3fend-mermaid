import { d as U, p as z } from "./flowDb-4ff734e0.js";
import { l as y, j as C, U as L, r as O, o as N, q as B, n as v, f as F } from "./mermaid-a4233606.js";
import { i as M, a as V, l as q, b as A, g as J, c as K } from "./edges-5bfa72ef.js";
import { E as Q } from "./elk.bundled-46cb8ded.js";
import { l as Z } from "./line-c351ac40.js";
import "./createText-00cc47e8.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
const X = (t, e, s) => {
  const { parentById: r } = s, d = /* @__PURE__ */ new Set();
  let l = t;
  for (; l; ) {
    if (d.add(l), l === e)
      return l;
    l = r[l];
  }
  for (l = e; l; ) {
    if (d.has(l))
      return l;
    l = r[l];
  }
  return "root";
}, D = new Q();
let g = {};
const Y = {};
let I = {};
const j = async function(t, e, s, r, d, l, h) {
  const p = s.select(`[id="${e}"]`).insert("g").attr("class", "nodes"), i = Object.keys(t);
  return await Promise.all(
    i.map(async function(u) {
      const n = t[u];
      let b = "default";
      n.classes.length > 0 && (b = n.classes.join(" ")), b = b + " flowchart-label";
      const _ = N(n.styles);
      let a = n.text !== void 0 ? n.text : n.id;
      const f = { width: 0, height: 0 }, k = [
        {
          id: n.id + "-west",
          layoutOptions: {
            "port.side": "WEST"
          }
        },
        {
          id: n.id + "-east",
          layoutOptions: {
            "port.side": "EAST"
          }
        },
        {
          id: n.id + "-south",
          layoutOptions: {
            "port.side": "SOUTH"
          }
        },
        {
          id: n.id + "-north",
          layoutOptions: {
            "port.side": "NORTH"
          }
        }
      ];
      let x = 0, c = "", E = {};
      switch (n.type) {
        case "round":
          x = 5, c = "rect";
          break;
        case "square":
          c = "rect";
          break;
        case "diamond":
          c = "question", E = {
            portConstraints: "FIXED_SIDE"
          };
          break;
        case "hexagon":
          c = "hexagon";
          break;
        case "odd":
          c = "rect_left_inv_arrow";
          break;
        case "lean_right":
          c = "lean_right";
          break;
        case "lean_left":
          c = "lean_left";
          break;
        case "trapezoid":
          c = "trapezoid";
          break;
        case "inv_trapezoid":
          c = "inv_trapezoid";
          break;
        case "odd_right":
          c = "rect_left_inv_arrow";
          break;
        case "circle":
          c = "circle";
          break;
        case "ellipse":
          c = "ellipse";
          break;
        case "stadium":
          c = "stadium";
          break;
        case "subroutine":
          c = "subroutine";
          break;
        case "cylinder":
          c = "cylinder";
          break;
        case "group":
          c = "rect";
          break;
        case "doublecircle":
          c = "doublecircle";
          break;
        default:
          c = "rect";
      }
      const $ = {
        labelStyle: _.labelStyle,
        shape: c,
        labelText: a,
        labelType: n.labelType,
        rx: x,
        ry: x,
        class: b,
        style: _.style,
        id: n.id,
        link: n.link,
        linkTarget: n.linkTarget,
        tooltip: d.db.getTooltip(n.id) || "",
        domId: d.db.lookUpDomId(n.id),
        haveCallback: n.haveCallback,
        width: n.type === "group" ? 500 : void 0,
        dir: n.dir,
        type: n.type,
        props: n.props,
        padding: L().flowchart.padding
      };
      let T, S;
      if ($.type !== "group")
        S = await V(p, $, n.dir), T = S.node().getBBox();
      else {
        r.createElementNS("http://www.w3.org/2000/svg", "text");
        const { shapeSvg: m, bbox: w } = await q(p, $, void 0, !0);
        f.width = w.width, f.wrappingWidth = L().flowchart.wrappingWidth, f.height = w.height, f.labelNode = m.node(), $.labelData = f;
      }
      const P = {
        id: n.id,
        ports: n.type === "diamond" ? k : [],
        // labelStyle: styles.labelStyle,
        // shape: _shape,
        layoutOptions: E,
        labelText: a,
        labelData: f,
        // labels: [{ text: vertexText }],
        // rx: radius,
        // ry: radius,
        // class: classStr,
        // style: styles.style,
        // link: vertex.link,
        // linkTarget: vertex.linkTarget,
        // tooltip: diagObj.db.getTooltip(vertex.id) || '',
        domId: d.db.lookUpDomId(n.id),
        // haveCallback: vertex.haveCallback,
        width: T == null ? void 0 : T.width,
        height: T == null ? void 0 : T.height,
        // dir: vertex.dir,
        type: n.type,
        // props: vertex.props,
        // padding: getConfig().flowchart.padding,
        // boundingBox,
        el: S,
        parent: l.parentById[n.id]
      };
      I[$.id] = P;
    })
  ), h;
}, R = (t, e, s) => {
  const r = {
    TB: {
      in: {
        north: "north"
      },
      out: {
        south: "west",
        west: "east",
        east: "south"
      }
    },
    LR: {
      in: {
        west: "west"
      },
      out: {
        east: "south",
        south: "north",
        north: "east"
      }
    },
    RL: {
      in: {
        east: "east"
      },
      out: {
        west: "north",
        north: "south",
        south: "west"
      }
    },
    BT: {
      in: {
        south: "south"
      },
      out: {
        north: "east",
        east: "west",
        west: "north"
      }
    }
  };
  return r.TD = r.TB, y.info("abc88", s, e, t), r[s][e][t];
}, G = (t, e, s) => {
  if (y.info("getNextPort abc88", { node: t, edgeDirection: e, graphDirection: s }), !g[t])
    switch (s) {
      case "TB":
      case "TD":
        g[t] = {
          inPosition: "north",
          outPosition: "south"
        };
        break;
      case "BT":
        g[t] = {
          inPosition: "south",
          outPosition: "north"
        };
        break;
      case "RL":
        g[t] = {
          inPosition: "east",
          outPosition: "west"
        };
        break;
      case "LR":
        g[t] = {
          inPosition: "west",
          outPosition: "east"
        };
        break;
    }
  const r = e === "in" ? g[t].inPosition : g[t].outPosition;
  return e === "in" ? g[t].inPosition = R(
    g[t].inPosition,
    e,
    s
  ) : g[t].outPosition = R(
    g[t].outPosition,
    e,
    s
  ), r;
}, tt = (t, e) => {
  let s = t.start, r = t.end;
  const d = s, l = r, h = I[s], o = I[r];
  return !h || !o ? { source: s, target: r } : (h.type === "diamond" && (s = `${s}-${G(s, "out", e)}`), o.type === "diamond" && (r = `${r}-${G(r, "in", e)}`), { source: s, target: r, sourceId: d, targetId: l });
}, et = function(t, e, s, r) {
  y.info("abc78 edges = ", t);
  const d = r.insert("g").attr("class", "edgeLabels");
  let l = {}, h = e.db.getDirection(), o, p;
  if (t.defaultStyle !== void 0) {
    const i = N(t.defaultStyle);
    o = i.style, p = i.labelStyle;
  }
  return t.forEach(function(i) {
    const u = "L-" + i.start + "-" + i.end;
    l[u] === void 0 ? (l[u] = 0, y.info("abc78 new entry", u, l[u])) : (l[u]++, y.info("abc78 new entry", u, l[u]));
    let n = u + "-" + l[u];
    y.info("abc78 new link id to be used is", u, n, l[u]);
    const b = "LS-" + i.start, _ = "LE-" + i.end, a = { style: "", labelStyle: "" };
    switch (a.minlen = i.length || 1, i.type === "arrow_open" ? a.arrowhead = "none" : a.arrowhead = "normal", a.arrowTypeStart = "arrow_open", a.arrowTypeEnd = "arrow_open", i.type) {
      case "double_arrow_cross":
        a.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        a.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        a.arrowTypeStart = "arrow_point";
      case "arrow_point":
        a.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        a.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        a.arrowTypeEnd = "arrow_circle";
        break;
    }
    let f = "", k = "";
    switch (i.stroke) {
      case "normal":
        f = "fill:none;", o !== void 0 && (f = o), p !== void 0 && (k = p), a.thickness = "normal", a.pattern = "solid";
        break;
      case "dotted":
        a.thickness = "normal", a.pattern = "dotted", a.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        a.thickness = "thick", a.pattern = "solid", a.style = "stroke-width: 3.5px;fill:none;";
        break;
    }
    if (i.style !== void 0) {
      const S = N(i.style);
      f = S.style, k = S.labelStyle;
    }
    a.style = a.style += f, a.labelStyle = a.labelStyle += k, i.interpolate !== void 0 ? a.curve = B(i.interpolate, v) : t.defaultInterpolate !== void 0 ? a.curve = B(t.defaultInterpolate, v) : a.curve = B(Y.curve, v), i.text === void 0 ? i.style !== void 0 && (a.arrowheadStyle = "fill: #333") : (a.arrowheadStyle = "fill: #333", a.labelpos = "c"), a.labelType = i.labelType, a.label = i.text.replace(F.lineBreakRegex, `
`), i.style === void 0 && (a.style = a.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), a.labelStyle = a.labelStyle.replace("color:", "fill:"), a.id = n, a.classes = "flowchart-link " + b + " " + _;
    const x = A(d, a), { source: c, target: E, sourceId: $, targetId: T } = tt(i, h);
    y.debug("abc78 source and target", c, E), s.edges.push({
      id: "e" + i.start + i.end,
      sources: [c],
      targets: [E],
      sourceId: $,
      targetId: T,
      labelEl: x,
      labels: [
        {
          width: a.width,
          height: a.height,
          orgWidth: a.width,
          orgHeight: a.height,
          text: a.label,
          layoutOptions: {
            "edgeLabels.inline": "true",
            "edgeLabels.placement": "CENTER"
          }
        }
      ],
      edgeData: a
    });
  }), s;
}, rt = function(t, e, s, r, d) {
  let l = "";
  r && (l = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, l = l.replace(/\(/g, "\\("), l = l.replace(/\)/g, "\\)")), K(t, e, l, d, s);
}, at = function(t, e) {
  return y.info("Extracting classes"), e.db.getClasses();
}, st = function(t) {
  const e = { parentById: {}, childrenById: {} }, s = t.getSubGraphs();
  return y.info("Subgraphs - ", s), s.forEach(function(r) {
    r.nodes.forEach(function(d) {
      e.parentById[d] = r.id, e.childrenById[r.id] === void 0 && (e.childrenById[r.id] = []), e.childrenById[r.id].push(d);
    });
  }), s.forEach(function(r) {
    r.id, e.parentById[r.id] !== void 0 && e.parentById[r.id];
  }), e;
}, lt = function(t, e, s) {
  const r = X(t, e, s);
  if (r === void 0 || r === "root")
    return { x: 0, y: 0 };
  const d = I[r].offset;
  return { x: d.posX, y: d.posY };
}, ot = function(t, e, s, r, d, l) {
  const h = lt(e.sourceId, e.targetId, d), o = e.sections[0].startPoint, p = e.sections[0].endPoint, u = (e.sections[0].bendPoints ? e.sections[0].bendPoints : []).map((E) => [E.x + h.x, E.y + h.y]), n = [
    [o.x + h.x, o.y + h.y],
    ...u,
    [p.x + h.x, p.y + h.y]
  ], { x: b, y: _ } = J(e.edgeData), a = Z().x(b).y(_).curve(v), f = t.insert("path").attr("d", a(n)).attr("class", "path " + s.classes).attr("fill", "none"), k = t.insert("g").attr("class", "edgeLabel"), x = C(k.node().appendChild(e.labelEl)), c = x.node().firstChild.getBoundingClientRect();
  x.attr("width", c.width), x.attr("height", c.height), k.attr(
    "transform",
    `translate(${e.labels[0].x + h.x}, ${e.labels[0].y + h.y})`
  ), rt(f, s, r.type, r.arrowMarkerAbsolute, l);
}, H = (t, e) => {
  t.forEach((s) => {
    s.children || (s.children = []);
    const r = e.childrenById[s.id];
    r && r.forEach((d) => {
      s.children.push(I[d]);
    }), H(s.children, e);
  });
}, nt = async function(t, e, s, r) {
  var P;
  r.db.clear(), I = {}, g = {}, r.db.setGen("gen-2"), r.parser.parse(t);
  const d = C("body").append("div").attr("style", "height:400px").attr("id", "cy");
  let l = {
    id: "root",
    layoutOptions: {
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "org.eclipse.elk.padding": "[top=100, left=100, bottom=110, right=110]",
      "elk.layered.spacing.edgeNodeBetweenLayers": "30",
      // 'elk.layered.mergeEdges': 'true',
      "elk.direction": "DOWN"
      // 'elk.ports.sameLayerEdges': true,
      // 'nodePlacement.strategy': 'SIMPLE',
    },
    children: [],
    edges: []
  };
  switch (y.info("Drawing flowchart using v3 renderer", D), r.db.getDirection()) {
    case "BT":
      l.layoutOptions["elk.direction"] = "UP";
      break;
    case "TB":
      l.layoutOptions["elk.direction"] = "DOWN";
      break;
    case "LR":
      l.layoutOptions["elk.direction"] = "RIGHT";
      break;
    case "RL":
      l.layoutOptions["elk.direction"] = "LEFT";
      break;
  }
  const { securityLevel: o, flowchart: p } = L();
  let i;
  o === "sandbox" && (i = C("#i" + e));
  const u = o === "sandbox" ? C(i.nodes()[0].contentDocument.body) : C("body"), n = o === "sandbox" ? i.nodes()[0].contentDocument : document, b = u.select(`[id="${e}"]`);
  M(b, ["point", "circle", "cross"], r.type, e);
  const a = r.db.getVertices();
  let f;
  const k = r.db.getSubGraphs();
  y.info("Subgraphs - ", k);
  for (let m = k.length - 1; m >= 0; m--)
    f = k[m], r.db.addVertex(
      f.id,
      { text: f.title, type: f.labelType },
      "group",
      void 0,
      f.classes,
      f.dir
    );
  const x = b.insert("g").attr("class", "subgraphs"), c = st(r.db);
  l = await j(a, e, u, n, r, c, l);
  const E = b.insert("g").attr("class", "edges edgePath"), $ = r.db.getEdges();
  l = et($, r, l, b), Object.keys(I).forEach((m) => {
    const w = I[m];
    w.parent || l.children.push(w), c.childrenById[m] !== void 0 && (w.labels = [
      {
        text: w.labelText,
        layoutOptions: {
          "nodeLabels.placement": "[H_CENTER, V_TOP, INSIDE]"
        },
        width: w.labelData.width,
        height: w.labelData.height
        // width: 100,
        // height: 100,
      }
    ], delete w.x, delete w.y, delete w.width, delete w.height);
  }), H(l.children, c), y.info("after layout", JSON.stringify(l, null, 2));
  const S = await D.layout(l);
  W(0, 0, S.children, b, x, r, 0), y.info("after layout", S), (P = S.edges) == null || P.map((m) => {
    ot(E, m, m.edgeData, r, c, e);
  }), O({}, b, p.diagramPadding, p.useMaxWidth), d.remove();
}, W = (t, e, s, r, d, l, h) => {
  s.forEach(function(o) {
    if (o)
      if (I[o.id].offset = {
        posX: o.x + t,
        posY: o.y + e,
        x: t,
        y: e,
        depth: h,
        width: o.width,
        height: o.height
      }, o.type === "group") {
        const p = d.insert("g").attr("class", "subgraph");
        p.insert("rect").attr("class", "subgraph subgraph-lvl-" + h % 5 + " node").attr("x", o.x + t).attr("y", o.y + e).attr("width", o.width).attr("height", o.height);
        const i = p.insert("g").attr("class", "label"), u = L().flowchart.htmlLabels ? o.labelData.width / 2 : 0;
        i.attr(
          "transform",
          `translate(${o.labels[0].x + t + o.x + u}, ${o.labels[0].y + e + o.y + 3})`
        ), i.node().appendChild(o.labelData.labelNode), y.info("Id (UGH)= ", o.type, o.labels);
      } else
        y.info("Id (UGH)= ", o.id), o.el.attr(
          "transform",
          `translate(${o.x + t + o.width / 2}, ${o.y + e + o.height / 2})`
        );
  }), s.forEach(function(o) {
    o && o.type === "group" && W(t + o.x, e + o.y, o.children, r, d, l, h + 1);
  });
}, it = {
  getClasses: at,
  draw: nt
}, ct = (t) => {
  let e = "";
  for (let s = 0; s < 5; s++)
    e += `
      .subgraph-lvl-${s} {
        fill: ${t[`surface${s}`]};
        stroke: ${t[`surfacePeer${s}`]};
      }
    `;
  return e;
}, dt = (t) => `.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor || t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span {
    color: ${t.titleColor};
  }

  .label text,span {
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
      opacity: 0.85;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span {
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
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${ct(t)}
`, ht = dt, xt = {
  db: U,
  renderer: it,
  parser: z,
  styles: ht
};
export {
  xt as diagram
};
