import { Graph } from './Graph';

export interface IFile {
  id: number;
  filename: string;
  code: string;
  graph: Graph;
}
