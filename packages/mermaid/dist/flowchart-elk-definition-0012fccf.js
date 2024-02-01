import { d as F, p as G } from "./flowDb-2a40ccb9.js";
import { l as p, j as $, U as L, r as U, o as N, q as B, n as _, f as H } from "./mermaid-50853933.js";
import { i as O, a as z, l as V, b as K, g as q, c as J } from "./edges-ca250937.js";
import { E as Q } from "./elk.bundled-20fd71e8.js";
import { l as Z } from "./line-6c8eb0a0.js";
import "./createText-5016ff4d.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
const X = (e, t, r) => {
  const { parentById: a } = r, f = /* @__PURE__ */ new Set();
  let s = e;
  for (; s; ) {
    if (f.add(s), s === t)
      return s;
    s = a[s];
  }
  for (s = t; s; ) {
    if (f.has(s))
      return s;
    s = a[s];
  }
  return "root";
}, Y = {
  "d3f:EncryptionAlgorithm": "\\ud83d\\udd10",
  "d3f:ApplicationLayerFirewall": "\\ud83d\\udee1",
  "d3f:AsymmetricKey": "fa:fa-key",
  "d3f:Authentication": "fa:fa-user-lock",
  "d3f:AuthorizationService": "fab:fa-openid",
  "d3f:Browser": "fab:fa-firefox",
  "d3f:Certificate": "fa:fa-certificate",
  "d3f:CertificateAuthority": "fa:fa-certificate fa:fa-lock",
  "d3f:CertificateRevocationList": "fa:fa-certificate fa:fa-ban",
  "d3f:Configuration": "fa:fa-file",
  "d3f:ContainerImage": "fab:fa-docker",
  "d3f:ContainerOrchestrationSoftware": "fab:fa-docker",
  "d3f:ContainerProcess": "fa:fa-cube",
  "d3f:ContainerRuntime": "fab:fa-docker",
  "d3f:Database": "fa:fa-database",
  "d3f:DatabaseQuery": "fa:fa-database fa:fa-magnifying-glass",
  "d3f:DesktopComputer": "fa:fa-desktop",
  "d3f:DNSServer": "fa:fa-atlas",
  "d3f:DocumentFile": "fab:fa-readme",
  "d3f:Email": "fa:fa-envelope",
  "d3f:EncryptedTunnels": "fab:fa-expeditedssl",
  "d3f:ExecutableScript": "fa:fa-file-code",
  "d3f:FileSystem": "fa:fa-folder",
  "d3f:Firewall": "\\ud83d\\udee1",
  "d3f:FlashMemory": "fa:fa-sd-card",
  "d3f:InternetNetworkTraffic": "fa:fa-cloud fa:fa-globe",
  "d3f:LaptopComputer": "fa:fa-laptop",
  "d3f:Log": "fa:fa-scroll",
  "d3f:LogFile": "fa:fa-scroll",
  "d3f:Mailbox": "\\ud83d\\udcec",
  "d3f:MailNetworkTraffic": "fa:fa-envelope",
  "d3f:MailServer": "\\ud83d\\udcec",
  "d3f:MailService": "\\ud83d\\udcec",
  "d3f:MemoryManagementUnit": "fa:fa-memory",
  "d3f:MemoryPool": "fa:fa-memory",
  "d3f:MessageAuthentication": "fa:fa-envelope fa:fa-file-signature",
  "d3f:MessageTransferAgent": "\\ud83d\\udcec",
  "d3f:MobilePhone": "fa:fa-mobile",
  "d3f:Multi-factorAuthentication": "fa:fa-fingerprint",
  "d3f:Network": "fa:fa-network-wired",
  "d3f:NetworkLink": "fa:fa-ethernet fa:fa-link",
  "d3f:NetworkTrafficPolicyMapping": "fa:fa-network-wired \\ud83d\\udd00",
  "d3f:OperatingSystem": "fab:fa-linux",
  "d3f:Partition": "fa:fa-hdd",
  "d3f:PasswordDatabase": "fa:fa-key fa:fa-database",
  "d3f:PhysicalLocation": "fa:fa-building",
  "d3f:PrivateKey": "fa:fa-key",
  "d3f:PrivilegedUserAccount": "fa:fa-user-plus",
  "d3f:Process": "\\u2699\\ufe0f",
  "d3f:PublicKey": "fa:fa-key",
  "d3f:RDPSession": "fa:fa-desktop fa:fa-lock",
  "d3f:ReverseProxyServer": "fab:fa-uncharted",
  "d3f:Router": "fab:fa-uncharted",
  "d3f:Server": "fa:fa-server",
  "d3f:Session": "fa:fa-cookie",
  "d3f:SessionCookie": "fa:fa-cookie",
  "d3f:SoftwarePackage": "fa:fa-box fa:fa-box-archive",
  "d3f:SSHSession": "fa:fa-terminal fa:fa-lock",
  "d3f:SymmetricKey": "fa:fa-key",
  "d3f:TabletComputer": "fa:fa-mobile",
  "d3f:TaskSchedule": "fa:fa-clock",
  "d3f:User": "fa:fa-user",
  "d3f:UserAccount": "fa:fa-user",
  "d3f:VirtualizationSoftware": "fa:fa-server fa:fa-cube",
  "d3f:VirtualMemorySpace": "fa:fa-memory",
  "d3f:Volume": "fa:fa-hockey-puck",
  "d3f:VPNServer": "fa:fa-lock \\u21cb",
  "d3f:WebApplicationFirewall": "\\ud83d\\udee1",
  "d3f:WebResourceAccess": "{..}",
  "d3f:WebServerApplication": "{fab:fa-whmcs}",
  "d3f:SoftwareArtifactServer": "fa:fa-boxes",
  "d3f:WirelessAccessPoint": "fa:fa-tower-cell",
  "d3f:WirelessRouter": "fa:fa-wifi"
}, j = function(e) {
  let t = e.match(/d3f:\w+/g);
  return p.warn("renderD3fendIcons", e, t), t && t.forEach((r) => {
    e = e.replace(r, `<a title='${r}' target='_blank' rel='noopener noreferrer'>${Y[r]}</a>`), p.warn("found", r, e);
  }), p.warn("new text", e), e;
}, D = new Q();
let g = {};
const ee = {};
let P = {};
const te = async function(e, t, r, a, f, s, d) {
  const b = r.select(`[id="${t}"]`).insert("g").attr("class", "nodes"), n = Object.keys(e);
  return await Promise.all(
    n.map(async function(u) {
      const i = e[u];
      let y = "default";
      i.classes.length > 0 && (y = i.classes.join(" ")), y = y + " flowchart-label";
      const C = N(i.styles);
      let o = i.text !== void 0 ? i.text : i.id;
      o = j(o);
      const h = { width: 0, height: 0 }, k = [
        {
          id: i.id + "-west",
          layoutOptions: {
            "port.side": "WEST"
          }
        },
        {
          id: i.id + "-east",
          layoutOptions: {
            "port.side": "EAST"
          }
        },
        {
          id: i.id + "-south",
          layoutOptions: {
            "port.side": "SOUTH"
          }
        },
        {
          id: i.id + "-north",
          layoutOptions: {
            "port.side": "NORTH"
          }
        }
      ];
      let m = 0, c = "", S = {};
      switch (i.type) {
        case "round":
          m = 5, c = "rect";
          break;
        case "square":
          c = "rect";
          break;
        case "diamond":
          c = "question", S = {
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
      const E = {
        labelStyle: C.labelStyle,
        shape: c,
        labelText: o,
        labelType: i.labelType,
        rx: m,
        ry: m,
        class: y,
        style: C.style,
        id: i.id,
        link: i.link,
        linkTarget: i.linkTarget,
        tooltip: f.db.getTooltip(i.id) || "",
        domId: f.db.lookUpDomId(i.id),
        haveCallback: i.haveCallback,
        width: i.type === "group" ? 500 : void 0,
        dir: i.dir,
        type: i.type,
        props: i.props,
        padding: L().d3fend.padding
      };
      let T, v;
      if (E.type !== "group")
        v = await z(b, E, i.dir), T = v.node().getBBox();
      else {
        a.createElementNS("http://www.w3.org/2000/svg", "text");
        const { shapeSvg: x, bbox: w } = await V(b, E, void 0, !0);
        h.width = w.width, h.wrappingWidth = L().d3fend.wrappingWidth, h.height = w.height, h.labelNode = x.node(), E.labelData = h;
      }
      const I = {
        id: i.id,
        ports: i.type === "diamond" ? k : [],
        // labelStyle: styles.labelStyle,
        // shape: _shape,
        layoutOptions: S,
        labelText: o,
        labelData: h,
        // labels: [{ text: vertexText }],
        // rx: radius,
        // ry: radius,
        // class: classStr,
        // style: styles.style,
        // link: vertex.link,
        // linkTarget: vertex.linkTarget,
        // tooltip: diagObj.db.getTooltip(vertex.id) || '',
        domId: f.db.lookUpDomId(i.id),
        // haveCallback: vertex.haveCallback,
        width: T == null ? void 0 : T.width,
        height: T == null ? void 0 : T.height,
        // dir: vertex.dir,
        type: i.type,
        // props: vertex.props,
        // padding: getConfig().d3fend.padding,
        // boundingBox,
        el: v,
        parent: s.parentById[i.id]
      };
      P[E.id] = I;
    })
  ), d;
}, A = (e, t, r) => {
  const a = {
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
  return a.TD = a.TB, p.info("abc88", r, t, e), a[r][t][e];
}, M = (e, t, r) => {
  if (p.info("getNextPort abc88", { node: e, edgeDirection: t, graphDirection: r }), !g[e])
    switch (r) {
      case "TB":
      case "TD":
        g[e] = {
          inPosition: "north",
          outPosition: "south"
        };
        break;
      case "BT":
        g[e] = {
          inPosition: "south",
          outPosition: "north"
        };
        break;
      case "RL":
        g[e] = {
          inPosition: "east",
          outPosition: "west"
        };
        break;
      case "LR":
        g[e] = {
          inPosition: "west",
          outPosition: "east"
        };
        break;
    }
  const a = t === "in" ? g[e].inPosition : g[e].outPosition;
  return t === "in" ? g[e].inPosition = A(
    g[e].inPosition,
    t,
    r
  ) : g[e].outPosition = A(
    g[e].outPosition,
    t,
    r
  ), a;
}, ae = (e, t) => {
  let r = e.start, a = e.end;
  const f = r, s = a, d = P[r], l = P[a];
  return !d || !l ? { source: r, target: a } : (d.type === "diamond" && (r = `${r}-${M(r, "out", t)}`), l.type === "diamond" && (a = `${a}-${M(a, "in", t)}`), { source: r, target: a, sourceId: f, targetId: s });
}, re = function(e, t, r, a) {
  p.info("abc78 edges = ", e);
  const f = a.insert("g").attr("class", "edgeLabels");
  let s = {}, d = t.db.getDirection(), l, b;
  if (e.defaultStyle !== void 0) {
    const n = N(e.defaultStyle);
    l = n.style, b = n.labelStyle;
  }
  return e.forEach(function(n) {
    const u = "L-" + n.start + "-" + n.end;
    s[u] === void 0 ? (s[u] = 0, p.info("abc78 new entry", u, s[u])) : (s[u]++, p.info("abc78 new entry", u, s[u]));
    let i = u + "-" + s[u];
    p.info("abc78 new link id to be used is", u, i, s[u]);
    const y = "LS-" + n.start, C = "LE-" + n.end, o = { style: "", labelStyle: "" };
    switch (o.minlen = n.length || 1, n.type === "arrow_open" ? o.arrowhead = "none" : o.arrowhead = "normal", o.arrowTypeStart = "arrow_open", o.arrowTypeEnd = "arrow_open", n.type) {
      case "double_arrow_cross":
        o.arrowTypeStart = "arrow_cross";
      case "arrow_cross":
        o.arrowTypeEnd = "arrow_cross";
        break;
      case "double_arrow_point":
        o.arrowTypeStart = "arrow_point";
      case "arrow_point":
        o.arrowTypeEnd = "arrow_point";
        break;
      case "double_arrow_circle":
        o.arrowTypeStart = "arrow_circle";
      case "arrow_circle":
        o.arrowTypeEnd = "arrow_circle";
        break;
    }
    let h = "", k = "";
    switch (n.stroke) {
      case "normal":
        h = "fill:none;", l !== void 0 && (h = l), b !== void 0 && (k = b), o.thickness = "normal", o.pattern = "solid";
        break;
      case "dotted":
        o.thickness = "normal", o.pattern = "dotted", o.style = "fill:none;stroke-width:2px;stroke-dasharray:3;";
        break;
      case "thick":
        o.thickness = "thick", o.pattern = "solid", o.style = "stroke-width: 3.5px;fill:none;";
        break;
    }
    if (n.style !== void 0) {
      const v = N(n.style);
      h = v.style, k = v.labelStyle;
    }
    o.style = o.style += h, o.labelStyle = o.labelStyle += k, n.interpolate !== void 0 ? o.curve = B(n.interpolate, _) : e.defaultInterpolate !== void 0 ? o.curve = B(e.defaultInterpolate, _) : o.curve = B(ee.curve, _), n.text === void 0 ? n.style !== void 0 && (o.arrowheadStyle = "fill: #333") : (o.arrowheadStyle = "fill: #333", o.labelpos = "c"), o.labelType = n.labelType, o.label = n.text.replace(H.lineBreakRegex, `
`), n.style === void 0 && (o.style = o.style || "stroke: #333; stroke-width: 1.5px;fill:none;"), o.labelStyle = o.labelStyle.replace("color:", "fill:"), o.id = i, o.classes = "flowchart-link " + y + " " + C;
    const m = K(f, o), { source: c, target: S, sourceId: E, targetId: T } = ae(n, d);
    p.debug("abc78 source and target", c, S), r.edges.push({
      id: "e" + n.start + n.end,
      sources: [c],
      targets: [S],
      sourceId: E,
      targetId: T,
      labelEl: m,
      labels: [
        {
          width: o.width,
          height: o.height,
          orgWidth: o.width,
          orgHeight: o.height,
          text: o.label,
          layoutOptions: {
            "edgeLabels.inline": "true",
            "edgeLabels.placement": "CENTER"
          }
        }
      ],
      edgeData: o
    });
  }), r;
}, oe = function(e, t, r, a, f) {
  let s = "";
  a && (s = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, s = s.replace(/\(/g, "\\("), s = s.replace(/\)/g, "\\)")), J(e, t, s, f, r);
}, se = function(e, t) {
  return p.info("Extracting classes"), t.db.getClasses();
}, le = function(e) {
  const t = { parentById: {}, childrenById: {} }, r = e.getSubGraphs();
  return p.info("Subgraphs - ", r), r.forEach(function(a) {
    a.nodes.forEach(function(f) {
      t.parentById[f] = a.id, t.childrenById[a.id] === void 0 && (t.childrenById[a.id] = []), t.childrenById[a.id].push(f);
    });
  }), r.forEach(function(a) {
    a.id, t.parentById[a.id] !== void 0 && t.parentById[a.id];
  }), t;
}, ie = function(e, t, r) {
  const a = X(e, t, r);
  if (a === void 0 || a === "root")
    return { x: 0, y: 0 };
  const f = P[a].offset;
  return { x: f.posX, y: f.posY };
}, ne = function(e, t, r, a, f, s) {
  const d = ie(t.sourceId, t.targetId, f), l = t.sections[0].startPoint, b = t.sections[0].endPoint, u = (t.sections[0].bendPoints ? t.sections[0].bendPoints : []).map((S) => [S.x + d.x, S.y + d.y]), i = [
    [l.x + d.x, l.y + d.y],
    ...u,
    [b.x + d.x, b.y + d.y]
  ], { x: y, y: C } = q(t.edgeData), o = Z().x(y).y(C).curve(_), h = e.insert("path").attr("d", o(i)).attr("class", "path " + r.classes).attr("fill", "none"), k = e.insert("g").attr("class", "edgeLabel"), m = $(k.node().appendChild(t.labelEl)), c = m.node().firstChild.getBoundingClientRect();
  m.attr("width", c.width), m.attr("height", c.height), k.attr(
    "transform",
    `translate(${t.labels[0].x + d.x}, ${t.labels[0].y + d.y})`
  ), oe(h, r, a.type, a.arrowMarkerAbsolute, s);
}, R = (e, t) => {
  e.forEach((r) => {
    r.children || (r.children = []);
    const a = t.childrenById[r.id];
    a && a.forEach((f) => {
      r.children.push(P[f]);
    }), R(r.children, t);
  });
}, ce = async function(e, t, r, a) {
  var I;
  a.db.clear(), P = {}, g = {}, a.db.setGen("gen-2"), a.parser.parse(e);
  const f = $("body").append("div").attr("style", "height:400px").attr("id", "cy");
  let s = {
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
  switch (p.info("Drawing flowchart using v3 renderer", D), a.db.getDirection()) {
    case "BT":
      s.layoutOptions["elk.direction"] = "UP";
      break;
    case "TB":
      s.layoutOptions["elk.direction"] = "DOWN";
      break;
    case "LR":
      s.layoutOptions["elk.direction"] = "RIGHT";
      break;
    case "RL":
      s.layoutOptions["elk.direction"] = "LEFT";
      break;
  }
  const { securityLevel: l, flowchart: b } = L();
  let n;
  l === "sandbox" && (n = $("#i" + t));
  const u = l === "sandbox" ? $(n.nodes()[0].contentDocument.body) : $("body"), i = l === "sandbox" ? n.nodes()[0].contentDocument : document, y = u.select(`[id="${t}"]`);
  O(y, ["point", "circle", "cross"], a.type, t);
  const o = a.db.getVertices();
  let h;
  const k = a.db.getSubGraphs();
  p.info("Subgraphs - ", k);
  for (let x = k.length - 1; x >= 0; x--)
    h = k[x], a.db.addVertex(
      h.id,
      { text: h.title, type: h.labelType },
      "group",
      void 0,
      h.classes,
      h.dir
    );
  const m = y.insert("g").attr("class", "subgraphs"), c = le(a.db);
  s = await te(o, t, u, i, a, c, s);
  const S = y.insert("g").attr("class", "edges edgePath"), E = a.db.getEdges();
  s = re(E, a, s, y), Object.keys(P).forEach((x) => {
    const w = P[x];
    w.parent || s.children.push(w), c.childrenById[x] !== void 0 && (w.labels = [
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
  }), R(s.children, c), p.info("after layout", JSON.stringify(s, null, 2));
  const v = await D.layout(s);
  W(0, 0, v.children, y, m, a, 0), p.info("after layout", v), (I = v.edges) == null || I.map((x) => {
    ne(S, x, x.edgeData, a, c, t);
  }), U({}, y, b.diagramPadding, b.useMaxWidth), f.remove();
}, W = (e, t, r, a, f, s, d) => {
  r.forEach(function(l) {
    if (l)
      if (P[l.id].offset = {
        posX: l.x + e,
        posY: l.y + t,
        x: e,
        y: t,
        depth: d,
        width: l.width,
        height: l.height
      }, l.type === "group") {
        const b = f.insert("g").attr("class", "subgraph");
        b.insert("rect").attr("class", "subgraph subgraph-lvl-" + d % 5 + " node").attr("x", l.x + e).attr("y", l.y + t).attr("width", l.width).attr("height", l.height);
        const n = b.insert("g").attr("class", "label"), u = L().d3fend.htmlLabels ? l.labelData.width / 2 : 0;
        n.attr(
          "transform",
          `translate(${l.labels[0].x + e + l.x + u}, ${l.labels[0].y + t + l.y + 3})`
        ), n.node().appendChild(l.labelData.labelNode), p.info("Id (UGH)= ", l.type, l.labels);
      } else
        p.info("Id (UGH)= ", l.id), l.el.attr(
          "transform",
          `translate(${l.x + e + l.width / 2}, ${l.y + t + l.height / 2})`
        );
  }), r.forEach(function(l) {
    l && l.type === "group" && W(e + l.x, t + l.y, l.children, a, f, s, d + 1);
  });
}, fe = {
  getClasses: se,
  draw: ce
}, de = (e) => {
  let t = "";
  for (let r = 0; r < 5; r++)
    t += `
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;
  return t;
}, ue = (e) => `.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor || e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
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
      opacity: 0.85;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
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

  ${de(e)}
`, he = ue, Se = {
  db: F,
  renderer: fe,
  parser: G,
  styles: he
};
export {
  Se as diagram
};
