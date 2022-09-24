import React, { useEffect, useState } from 'react';
import { filesMocks } from '../mocks';
import { setActiveFile } from '../store/reducers/FileSlice';
import { useAppDispatch } from '../store/store';
import { IFile } from '../types/Files';
import File from './File';

const Files = () => {
  const [files, setFiles] = useState<IFile[]>([]); // some array of files
  const [activeFileID, setActiveFileID] = useState<number>();
  const dispatch = useAppDispatch();

  const loadDocumentData = async () => {
    try {
      const data = await fetch('hjhbjhbkjb');
      //   setFiles(data);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  useEffect(() => {
    // loadDocumentData();

    setFiles(filesMocks);
  }, []);

  const handleFileClick = (file: IFile) => {
    setActiveFileID(file.id);

    dispatch(setActiveFile(file));
  };

  return (
    <div className='files'>
      {!!files.length &&
        files.map((file) => (
          <File
            key={file.id}
            file={file}
            onClick={handleFileClick}
            activeClass={file.id === activeFileID ? 'activeFile' : undefined}
          />
        ))}
    </div>
  );
};

export default Files;
