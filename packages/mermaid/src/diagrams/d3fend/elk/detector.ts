import type {
  ExternalDiagramDefinition,
  DiagramDetector,
  DiagramLoader,
} from '../../../diagram-api/types.js';

const id = 'd3fend';

const detector: DiagramDetector = (txt, config): boolean => {
  if (
    // If diagram explicitly states flowchart-elk
    /^\s*d3fend/.test(txt)
  ) {
    return true;
  }
  return false;
};

const loader: DiagramLoader = async () => {
  const { diagram } = await import('./flowchart-elk-definition.js');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
