import { useFileUploadStore } from 'chat-store';
import React, { useState } from 'react';
import { RiFileDownloadLine } from 'react-icons/ri';
import ImgsViewer from 'react-images-viewer';

const FileDisplay = () => {
  const { fileItems } = useFileUploadStore(state => state);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      {fileItems && fileItems.fileType === 'image' && (
        <div style={{ width: 100, height: 100, marginTop: '10px' }}>
          <img src={fileItems.fileUrl} alt="images" width="100%" style={{ cursor: 'pointer' }} onClick={() => setIsImageOpen(true)} />
          <ImgsViewer imgs={[{ src: fileItems.fileUrl }]} isOpen={isImageOpen} backdropCloseable={true} onClose={() => setIsImageOpen(false)} />
        </div>
      )}
      {fileItems && fileItems.fileType === 'application' && (
        <a href={fileItems.fileUrl} style={{ marginTop: '30px', cursor: 'pointer', color: 'grey', display: 'block' }} download>
          <RiFileDownloadLine style={{ fontSize: '40px' }} />
          <div>{fileItems.file.name}</div>
        </a>
      )}
      {fileItems && fileItems.fileType === 'video' && (
        <div style={{ width: 100, height: 100, marginTop: '10px' }}>
          <video id="video" src={fileItems.fileUrl} controls width={200} height={200}></video>
        </div>
      )}
    </>
  );
};

export default FileDisplay;
