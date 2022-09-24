import React, { useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import { graphConfig } from '../consts';
import { useAppSelector } from '../store/store';
import { IFile } from '../types/Files';

const GraphPresentation = () => {
  const [fileToRender, setFileToRender] = useState<IFile>();
  const { activeFile } = useAppSelector((store) => store.FileSlice);
  const allNodes: string[] = [];
  const unlinkedNodes: string[] = [];

  useEffect(() => {
    if (!!activeFile) revealUnlinkedNodes();
  }, [activeFile]);

  const revealUnlinkedNodes = () => {
    if (!activeFile) return;

    let graph = activeFile.graph;

    for (let index = 0; index < activeFile.graph.links.length; index++) {
      const element = activeFile.graph.links[index];

      allNodes.push(element.source, element.target);
    }

    for (let index = 0; index < activeFile.graph.nodes.length; index++) {
      const element = activeFile.graph.nodes[index].id;

      if (!allNodes.includes(element)) unlinkedNodes.push(element);
    }

    if (!unlinkedNodes.length) {
      setFileToRender(activeFile);
      return;
    }

    const newNodes = graph.nodes.map((node) => {
      if (unlinkedNodes.includes(node.id)) {
        return {
          ...node,
          fx: Math.random() * 1000,
          fy: Math.random() * 1000,
        };
      }

      return {
        ...node,
      };
    });

    let file: IFile = {
      ...activeFile,
      graph: { ...activeFile.graph, nodes: [...newNodes] },
    };

    setFileToRender(file);
  };

  const onClickNode = () => {};

  return (
    <div>
      {!!fileToRender && (
        <Graph
          id='graph-id' // id is mandatory
          data={fileToRender?.graph}
          config={graphConfig}
          onClickNode={onClickNode}
        />
      )}
    </div>
  );
};

export default GraphPresentation;
