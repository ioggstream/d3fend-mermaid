import type { DiagramDetector, DiagramLoader } from '../../diagram-api/types.js';
import type { ExternalDiagramDefinition } from '../../diagram-api/types.js';
import { log } from '../../logger.js';

const id = 'd3fend';

const detector: DiagramDetector = (txt, config) => {
  return false;
  if (config?.d3fend?.defaultRenderer === 'dagre-d3' || config?.d3fend?.defaultRenderer === 'elk') {
    log.warn('d3fend detector returning false', txt, config?.flowchart?.defaultRenderer);
    return false;
  }

  // If we have configured to use dagre-wrapper then we should return true in this function for graph code thus making it use the new flowchart diagram
  if (/^\s*graph/.test(txt) && config?.d3fend?.defaultRenderer === 'dagre-wrapper') {
    return true;
  }
  return /^\s*d3fend/.test(txt);
};

const loader: DiagramLoader = async () => {
  const { diagram } = await import('./flowDiagram-v2.js');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
