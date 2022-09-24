import React from 'react';
import { IFile } from '../types/Files';

interface FileProps {
  file: IFile;
  activeClass?: string | undefined;
  onClick: (file: IFile) => void;
}

const File = ({ file, onClick, activeClass }: FileProps) => {
  return (
    <div
      className={`file ${!!activeClass ? activeClass : ''}`}
      onClick={() => onClick(file)}
    >
      <p>{file.filename}</p>
    </div>
  );
};

export default File;
