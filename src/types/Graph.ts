export interface Graph {
  nodes: Node[];
  links: Links[];
}

interface Node {
  id: string;
  color?: string;
  symbolType?: string;
  label?: string;
  fx?: number;
  fy?: number;

  location?: string;
}

interface Links {
  source: string;
  target: string;
}
