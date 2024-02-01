import { p as parser, f as flowDb } from "./flowDb-805ab918.js";
import { f as flowRendererV2, a as flowStyles } from "./styles-d537fb18.js";
import { t as setConfig } from "./mermaid-46dd665a.js";
import "./layout-73ed1785.js";
import "./index-b443c7eb.js";
import "./edges-09fd62bc.js";
import "./createText-243c115e.js";
import "./line-2fa79026.js";
import "./array-b7dcf730.js";
import "./path-39bad7e2.js";
import "./add-html-label-96c01d72.js";
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
