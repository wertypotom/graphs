import React, { useState } from 'react';
// import { File } from '../types/Files';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [uploaded, setUploaded] = useState();

  const handleUploadClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e ', e.target.files);

    setSelectedFile(e.target.files);
  };

  const handleUpload = () => {};

  return <></>;
};

export default FileUpload;
