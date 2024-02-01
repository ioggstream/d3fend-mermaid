import { p as e, f as o } from "./flowDb-97b55387.js";
import { f as t, a } from "./styles-ad92e457.js";
import { t as s } from "./mermaid-b08fd25b.js";
import "./layout-69c3f30d.js";
import "./index-54807e62.js";
import "./edges-ddad6e3a.js";
import "./createText-bf944b7b.js";
import "./line-422797b4.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./add-html-label-38cc67c7.js";
const A = {
  parser: e,
  db: o,
  renderer: t,
  styles: a,
  init: (r) => {
    r.flowchart || (r.flowchart = {}), r.flowchart.arrowMarkerAbsolute = r.arrowMarkerAbsolute, s({ flowchart: { arrowMarkerAbsolute: r.arrowMarkerAbsolute } }), t.setConf(r.flowchart), o.clear(), o.setGen("gen-2");
  }
};
export {
  A as diagram
};
