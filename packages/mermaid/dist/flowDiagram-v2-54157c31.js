import { p as e, f as o } from "./flowDb-4ff734e0.js";
import { f as t, a } from "./styles-d41d06b3.js";
import { t as s } from "./mermaid-a4233606.js";
import "./layout-856ad9e1.js";
import "./index-71a3fb82.js";
import "./edges-5bfa72ef.js";
import "./createText-00cc47e8.js";
import "./line-c351ac40.js";
import "./array-2ff2c7a6.js";
import "./path-428ebac9.js";
import "./add-html-label-e7f32a4b.js";
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
