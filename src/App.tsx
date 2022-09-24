import React from 'react';

import Files from './components/Files';
import FileUpload from './components/FileUpload';
import GraphPresentation from './components/Graph';

function App() {
  const onClickNode = function (nodeId: string) {
    // window.alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function (source: string, target: string) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <>
      <Files />
      <GraphPresentation />
    </>
  );
}

export default App;
