import { b as A, i as N, m as L, G as _, l as H } from "./layout-856ad9e1.js";
import { d as J, e as T, f as D, i as V, h as U, j as W, u as Y, s as q, a as z, b as K, p as O, k as Q, m as Z } from "./edges-5bfa72ef.js";
import { l as s, c as p, p as X, j as R } from "./mermaid-a4233606.js";
import { a as I } from "./createText-00cc47e8.js";
var tt = 4;
function et(e) {
  return A(e, tt);
}
function b(e) {
  var t = {
    options: {
      directed: e.isDirected(),
      multigraph: e.isMultigraph(),
      compound: e.isCompound()
    },
    nodes: nt(e),
    edges: it(e)
  };
  return N(e.graph()) || (t.value = et(e.graph())), t;
}
function nt(e) {
  return L(e.nodes(), function(t) {
    var n = e.node(t), r = e.parent(t), i = { v: t };
    return N(n) || (i.value = n), N(r) || (i.parent = r), i;
  });
}
function it(e) {
  return L(e.edges(), function(t) {
    var n = e.edge(t), r = { v: t.v, w: t.w };
    return N(t.name) || (r.name = t.name), N(n) || (r.value = n), r;
  });
}
let l = {}, w = {}, P = {};
const st = () => {
  w = {}, P = {}, l = {};
}, B = (e, t) => (s.trace("In isDecendant", t, " ", e, " = ", w[t].includes(e)), !!w[t].includes(e)), rt = (e, t) => (s.info("Decendants of ", t, " is ", w[t]), s.info("Edge is ", e), e.v === t || e.w === t ? !1 : w[t] ? w[t].includes(e.v) || B(e.v, t) || B(e.w, t) || w[t].includes(e.w) : (s.debug("Tilt, ", t, ",not in decendants"), !1)), k = (e, t, n, r) => {
  s.warn(
    "Copying children of ",
    e,
    "root",
    r,
    "data",
    t.node(e),
    r
  );
  const i = t.children(e) || [];
  e !== r && i.push(e), s.warn("Copying (nodes) clusterId", e, "nodes", i), i.forEach((a) => {
    if (t.children(a).length > 0)
      k(a, t, n, r);
    else {
      const d = t.node(a);
      s.info("cp ", a, " to ", r, " with parent ", e), n.setNode(a, d), r !== t.parent(a) && (s.warn("Setting parent", a, t.parent(a)), n.setParent(a, t.parent(a))), e !== r && a !== e ? (s.debug("Setting parent", a, e), n.setParent(a, e)) : (s.info("In copy ", e, "root", r, "data", t.node(e), r), s.debug(
        "Not Setting parent for node=",
        a,
        "cluster!==rootId",
        e !== r,
        "node!==clusterId",
        a !== e
      ));
      const u = t.edges(a);
      s.debug("Copying Edges", u), u.forEach((f) => {
        s.info("Edge", f);
        const h = t.edge(f.v, f.w, f.name);
        s.info("Edge data", h, r);
        try {
          rt(f, r) ? (s.info("Copying as ", f.v, f.w, h, f.name), n.setEdge(f.v, f.w, h, f.name), s.info("newGraph edges ", n.edges(), n.edge(n.edges()[0]))) : s.info(
            "Skipping copy of edge ",
            f.v,
            "-->",
            f.w,
            " rootId: ",
            r,
            " clusterId:",
            e
          );
        } catch (g) {
          s.error(g);
        }
      });
    }
    s.debug("Removing node", a), t.removeNode(a);
  });
}, F = (e, t) => {
  const n = t.children(e);
  let r = [...n];
  for (const i of n)
    P[i] = e, r = [...r, ...F(i, t)];
  return r;
}, C = (e, t) => {
  s.trace("Searching", e);
  const n = t.children(e);
  if (s.trace("Searching children of id ", e, n), n.length < 1)
    return s.trace("This is a valid node", e), e;
  for (const r of n) {
    const i = C(r, t);
    if (i)
      return s.trace("Found replacement for", e, " => ", i), i;
  }
}, S = (e) => !l[e] || !l[e].externalConnections ? e : l[e] ? l[e].id : e, at = (e, t) => {
  if (!e || t > 10) {
    s.debug("Opting out, no graph ");
    return;
  } else
    s.debug("Opting in, graph ");
  e.nodes().forEach(function(n) {
    e.children(n).length > 0 && (s.warn(
      "Cluster identified",
      n,
      " Replacement id in edges: ",
      C(n, e)
    ), w[n] = F(n, e), l[n] = { id: C(n, e), clusterData: e.node(n) });
  }), e.nodes().forEach(function(n) {
    const r = e.children(n), i = e.edges();
    r.length > 0 ? (s.debug("Cluster identified", n, w), i.forEach((a) => {
      if (a.v !== n && a.w !== n) {
        const d = B(a.v, n), u = B(a.w, n);
        d ^ u && (s.warn("Edge: ", a, " leaves cluster ", n), s.warn("Decendants of XXX ", n, ": ", w[n]), l[n].externalConnections = !0);
      }
    })) : s.debug("Not a cluster ", n, w);
  });
  for (let n of Object.keys(l)) {
    const r = l[n].id, i = e.parent(r);
    i !== n && l[i] && !l[i].externalConnections && (l[n].id = i);
  }
  e.edges().forEach(function(n) {
    const r = e.edge(n);
    s.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(n)), s.warn("Edge " + n.v + " -> " + n.w + ": " + JSON.stringify(e.edge(n)));
    let i = n.v, a = n.w;
    if (s.warn(
      "Fix XXX",
      l,
      "ids:",
      n.v,
      n.w,
      "Translating: ",
      l[n.v],
      " --- ",
      l[n.w]
    ), l[n.v] && l[n.w] && l[n.v] === l[n.w]) {
      s.warn("Fixing and trixing link to self - removing XXX", n.v, n.w, n.name), s.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), i = S(n.v), a = S(n.w), e.removeEdge(n.v, n.w, n.name);
      const d = n.w + "---" + n.v;
      e.setNode(d, {
        domId: d,
        id: d,
        labelStyle: "",
        labelText: r.label,
        padding: 0,
        shape: "labelRect",
        style: ""
      });
      const u = structuredClone(r), f = structuredClone(r);
      u.label = "", u.arrowTypeEnd = "none", f.label = "", u.fromCluster = n.v, f.toCluster = n.v, e.setEdge(i, d, u, n.name + "-cyclic-special"), e.setEdge(d, a, f, n.name + "-cyclic-special");
    } else if (l[n.v] || l[n.w]) {
      if (s.warn("Fixing and trixing - removing XXX", n.v, n.w, n.name), i = S(n.v), a = S(n.w), e.removeEdge(n.v, n.w, n.name), i !== n.v) {
        const d = e.parent(i);
        l[d].externalConnections = !0, r.fromCluster = n.v;
      }
      if (a !== n.w) {
        const d = e.parent(a);
        l[d].externalConnections = !0, r.toCluster = n.w;
      }
      s.warn("Fix Replacing with XXX", i, a, n.name), e.setEdge(i, a, r, n.name);
    }
  }), s.warn("Adjusted Graph", b(e)), G(e, 0), s.trace(l);
}, G = (e, t) => {
  if (s.warn("extractor - ", t, b(e), e.children("D")), t > 10) {
    s.error("Bailing out");
    return;
  }
  let n = e.nodes(), r = !1;
  for (const i of n) {
    const a = e.children(i);
    r = r || a.length > 0;
  }
  if (!r) {
    s.debug("Done, no node has children", e.nodes());
    return;
  }
  s.debug("Nodes = ", n, t);
  for (const i of n)
    if (s.debug(
      "Extracting node",
      i,
      l,
      l[i] && !l[i].externalConnections,
      !e.parent(i),
      e.node(i),
      e.children("D"),
      " Depth ",
      t
    ), !l[i])
      s.debug("Not a cluster", i, t);
    else if (!l[i].externalConnections && // !graph.parent(node) &&
    e.children(i) && e.children(i).length > 0) {
      s.warn(
        "Cluster without external connections, without a parent and with children",
        i,
        t
      );
      let d = e.graph().rankdir === "TB" ? "LR" : "TB";
      l[i] && l[i].clusterData && l[i].clusterData.dir && (d = l[i].clusterData.dir, s.warn("Fixing dir", l[i].clusterData.dir, d));
      const u = new _({
        multigraph: !0,
        compound: !0
      }).setGraph({
        rankdir: d,
        // Todo: set proper spacing
        nodesep: 50,
        ranksep: 50,
        marginx: 8,
        marginy: 8
      }).setDefaultEdgeLabel(function() {
        return {};
      });
      s.warn("Old graph before copy", b(e)), k(i, e, u, i), e.setNode(i, {
        clusterNode: !0,
        id: i,
        clusterData: l[i].clusterData,
        labelText: l[i].labelText,
        graph: u
      }), s.warn("New graph after copy node: (", i, ")", b(u)), s.debug("Old graph after copy", b(e));
    } else
      s.warn(
        "Cluster ** ",
        i,
        " **not meeting the criteria !externalConnections:",
        !l[i].externalConnections,
        " no parent: ",
        !e.parent(i),
        " children ",
        e.children(i) && e.children(i).length > 0,
        e.children("D"),
        t
      ), s.debug(l);
  n = e.nodes(), s.warn("New list of nodes", n);
  for (const i of n) {
    const a = e.node(i);
    s.warn(" Now next level", i, a), a.clusterNode && G(a.graph, t + 1);
  }
}, $ = (e, t) => {
  if (t.length === 0)
    return [];
  let n = Object.assign(t);
  return t.forEach((r) => {
    const i = e.children(r), a = $(e, i);
    n = [...n, ...a];
  }), n;
}, ct = (e) => $(e, e.children()), ot = (e, t) => {
  s.info("Creating subgraph rect for ", t.id, t);
  const n = p(), r = e.insert("g").attr("class", "cluster" + (t.class ? " " + t.class : "")).attr("id", t.id), i = r.insert("rect", ":first-child"), a = X(n.flowchart.htmlLabels), d = r.insert("g").attr("class", "cluster-label"), u = t.labelType === "markdown" ? I(d, t.labelText, { style: t.labelStyle, useHtmlLabels: a }) : d.node().appendChild(J(t.labelText, t.labelStyle, void 0, !0));
  let f = u.getBBox();
  if (X(n.flowchart.htmlLabels)) {
    const c = u.children[0], o = R(u);
    f = c.getBoundingClientRect(), o.attr("width", f.width), o.attr("height", f.height);
  }
  const h = 0 * t.padding, g = h / 2, x = t.width <= f.width + h ? f.width + h : t.width;
  t.width <= f.width + h ? t.diff = (f.width - t.width) / 2 - t.padding / 2 : t.diff = -t.padding / 2, s.trace("Data ", t, JSON.stringify(t)), i.attr("style", t.style).attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - x / 2).attr("y", t.y - t.height / 2 - g).attr("width", x).attr("height", t.height + h);
  const { subGraphTitleTopMargin: v } = T(n);
  a ? d.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    `translate(${t.x - f.width / 2}, ${t.y - t.height / 2 + v})`
  ) : d.attr(
    "transform",
    // This puts the labal on top of the box instead of inside it
    `translate(${t.x}, ${t.y - t.height / 2 + v})`
  );
  const y = i.node().getBBox();
  return t.width = y.width, t.height = y.height, t.intersect = function(c) {
    return D(t, c);
  }, r;
}, lt = (e, t) => {
  const n = e.insert("g").attr("class", "note-cluster").attr("id", t.id), r = n.insert("rect", ":first-child"), i = 0 * t.padding, a = i / 2;
  r.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2 - a).attr("width", t.width + i).attr("height", t.height + i).attr("fill", "none");
  const d = r.node().getBBox();
  return t.width = d.width, t.height = d.height, t.intersect = function(u) {
    return D(t, u);
  }, n;
}, ft = (e, t) => {
  const n = p(), r = e.insert("g").attr("class", t.classes).attr("id", t.id), i = r.insert("rect", ":first-child"), a = r.insert("g").attr("class", "cluster-label"), d = r.append("rect"), u = a.node().appendChild(J(t.labelText, t.labelStyle, void 0, !0));
  let f = u.getBBox();
  if (X(n.flowchart.htmlLabels)) {
    const c = u.children[0], o = R(u);
    f = c.getBoundingClientRect(), o.attr("width", f.width), o.attr("height", f.height);
  }
  f = u.getBBox();
  const h = 0 * t.padding, g = h / 2, x = t.width <= f.width + t.padding ? f.width + t.padding : t.width;
  t.width <= f.width + t.padding ? t.diff = (f.width + t.padding * 0 - t.width) / 2 : t.diff = -t.padding / 2, i.attr("class", "outer").attr("x", t.x - x / 2 - g).attr("y", t.y - t.height / 2 - g).attr("width", x + h).attr("height", t.height + h), d.attr("class", "inner").attr("x", t.x - x / 2 - g).attr("y", t.y - t.height / 2 - g + f.height - 1).attr("width", x + h).attr("height", t.height + h - f.height - 3);
  const { subGraphTitleTopMargin: v } = T(n);
  a.attr(
    "transform",
    `translate(${t.x - f.width / 2}, ${t.y - t.height / 2 - t.padding / 3 + (X(n.flowchart.htmlLabels) ? 5 : 3) + v})`
  );
  const y = i.node().getBBox();
  return t.height = y.height, t.intersect = function(c) {
    return D(t, c);
  }, r;
}, dt = (e, t) => {
  const n = e.insert("g").attr("class", t.classes).attr("id", t.id), r = n.insert("rect", ":first-child"), i = 0 * t.padding, a = i / 2;
  r.attr("class", "divider").attr("x", t.x - t.width / 2 - a).attr("y", t.y - t.height / 2).attr("width", t.width + i).attr("height", t.height + i);
  const d = r.node().getBBox();
  return t.width = d.width, t.height = d.height, t.diff = -t.padding / 2, t.intersect = function(u) {
    return D(t, u);
  }, n;
}, ut = { rect: ot, roundedWithTitle: ft, noteGroup: lt, divider: dt };
let j = {};
const ht = (e, t) => {
  s.trace("Inserting cluster");
  const n = t.shape || "rect";
  j[t.id] = ut[n](e, t);
}, wt = () => {
  j = {};
}, M = async (e, t, n, r, i, a) => {
  s.info("Graph in recursive render: XXX", b(t), i);
  const d = t.graph().rankdir;
  s.trace("Dir in recursive render - dir:", d);
  const u = e.insert("g").attr("class", "root");
  t.nodes() ? s.info("Recursive render XXX", t.nodes()) : s.info("No nodes found for", t), t.edges().length > 0 && s.trace("Recursive edges", t.edge(t.edges()[0]));
  const f = u.insert("g").attr("class", "clusters"), h = u.insert("g").attr("class", "edgePaths"), g = u.insert("g").attr("class", "edgeLabels"), x = u.insert("g").attr("class", "nodes");
  await Promise.all(
    t.nodes().map(async function(c) {
      const o = t.node(c);
      if (i !== void 0) {
        const m = JSON.parse(JSON.stringify(i.clusterData));
        s.info("Setting data for cluster XXX (", c, ") ", m, i), t.setNode(i.id, m), t.parent(c) || (s.trace("Setting parent", c, i.id), t.setParent(c, i.id, m));
      }
      if (s.info("(Insert) Node XXX" + c + ": " + JSON.stringify(t.node(c))), o && o.clusterNode) {
        s.info("Cluster identified", c, o.width, t.node(c));
        const m = await M(
          x,
          o.graph,
          n,
          r,
          t.node(c),
          a
        ), E = m.elem;
        Y(o, E), o.diff = m.diff || 0, s.info("Node bounds (abc123)", c, o, o.width, o.x, o.y), q(E, o), s.warn("Recursive render complete ", E, o);
      } else
        t.children(c).length > 0 ? (s.info("Cluster - the non recursive path XXX", c, o.id, o, t), s.info(C(o.id, t)), l[o.id] = { id: C(o.id, t), node: o }) : (s.info("Node - the non recursive path", c, o.id, o), await z(x, t.node(c), d));
    })
  ), t.edges().forEach(function(c) {
    const o = t.edge(c.v, c.w, c.name);
    s.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c)), s.info("Edge " + c.v + " -> " + c.w + ": ", c, " ", JSON.stringify(t.edge(c))), s.info("Fix", l, "ids:", c.v, c.w, "Translateing: ", l[c.v], l[c.w]), K(g, o);
  }), t.edges().forEach(function(c) {
    s.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(c));
  }), s.info("#############################################"), s.info("###                Layout                 ###"), s.info("#############################################"), s.info(t), H(t), s.info("Graph after layout:", b(t));
  let v = 0;
  const { subGraphTitleTotalMargin: y } = T(a);
  return ct(t).forEach(function(c) {
    const o = t.node(c);
    s.info("Position " + c + ": " + JSON.stringify(t.node(c))), s.info(
      "Position " + c + ": (" + o.x,
      "," + o.y,
      ") width: ",
      o.width,
      " height: ",
      o.height
    ), o && o.clusterNode ? (o.y += y, O(o)) : t.children(c).length > 0 ? (o.height += y, ht(f, o), l[o.id].node = o) : (o.y += y / 2, O(o));
  }), t.edges().forEach(function(c) {
    const o = t.edge(c);
    s.info("Edge " + c.v + " -> " + c.w + ": " + JSON.stringify(o), o), o.points.forEach((E) => E.y += y / 2);
    const m = Q(h, c, o, l, n, t, r);
    Z(o, m);
  }), t.nodes().forEach(function(c) {
    const o = t.node(c);
    s.info(c, o.type, o.diff), o.type === "group" && (v = o.diff);
  }), { elem: u, diff: v };
}, mt = async (e, t, n, r, i) => {
  V(e, n, r, i), U(), W(), wt(), st(), s.warn("Graph at first:", JSON.stringify(b(t))), at(t), s.warn("Graph after:", JSON.stringify(b(t)));
  const a = p();
  await M(e, t, r, i, void 0, a);
};
export {
  mt as r
};
