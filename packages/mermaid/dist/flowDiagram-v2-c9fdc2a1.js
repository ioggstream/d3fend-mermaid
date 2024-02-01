import { p as e, f as o } from "./flowDb-140784b2.js";
import { f as t, a } from "./styles-d4e5c2f1.js";
import { t as s } from "./mermaid-50853933.js";
import "./layout-185b1b6c.js";
import "./index-75a0d799.js";
import "./edges-ca250937.js";
import "./createText-5016ff4d.js";
import "./line-6c8eb0a0.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./add-html-label-a9c130f1.js";
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
