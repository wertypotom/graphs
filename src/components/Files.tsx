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
      const responce = await fetch('http://127.0.0.1:8000/parser');
      const data = (await responce.json()) as IFile[];

      setFiles(data);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  useEffect(() => {
    loadDocumentData();

    // setFiles(filesMocks);
  }, []);

  const handleFileClick = (file: IFile) => {
    setActiveFileID(file.id);

    dispatch(setActiveFile(file));
  };

  return (
    <div className='files' role='group'>
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
