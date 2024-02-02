import { p as parser, f as flowDb } from "./flowDb-40c28222.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-fe5a1ce3.js";
import { t as setConfig } from "./mermaid-e1024899.js";
import "./layout-70325ec0.js";
import "./index-203db4db.js";
import "./edges-0e73d492.js";
import "./createText-e6ea91a3.js";
import "./line-32361655.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./add-html-label-cd65b47f.js";
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
