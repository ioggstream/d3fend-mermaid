import { p as parser, f as flowDb } from "./flowDb-f8e94985.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-45fb7cb7.js";
import { t as setConfig } from "./mermaid-33758c59.js";
import "./layout-211d33a1.js";
import "./index-97924777.js";
import "./edges-eb986856.js";
import "./createText-38bff8e8.js";
import "./line-fa4e0730.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./add-html-label-016fe8ed.js";
const diagram = {
  parser,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
