import { useFileUploadStore } from 'chat-store';
import React, { useState } from 'react';
import { RiFileDownloadLine } from 'react-icons/ri';
import ImgsViewer from 'react-images-viewer';

const FileDisplay: React.FC<{ fileId: number }> = ({ fileId }) => {
  const { fileItems } = useFileUploadStore(state => state);
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      {fileItems && (
        <div>
          {fileItems[fileId].fileType === 'image' && (
            <div style={{ width: 100, height: 100, marginTop: '10px' }}>
              <img src={fileItems[fileId].fileUrl} alt="images" width="100%" style={{ cursor: 'pointer' }} onClick={() => setIsImageOpen(true)} />
              <ImgsViewer imgs={[{ src: fileItems[fileId].fileUrl }]} isOpen={isImageOpen} backdropCloseable={true} onClose={() => setIsImageOpen(false)} />
            </div>
          )}
          {fileItems[fileId].fileType === 'application' && (
            <a href={fileItems[fileId].fileUrl} style={{ marginTop: '30px', cursor: 'pointer', color: 'grey', display: 'block' }} download>
              <RiFileDownloadLine style={{ fontSize: '40px' }} />
              <div>{fileItems[fileId].file.name}</div>
            </a>
          )}
          {fileItems[fileId].fileType === 'video' && (
            <div style={{ width: 100, height: 100, marginTop: '10px' }}>
              <video id="video" src={fileItems[fileId].fileUrl} controls width={200} height={200}></video>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FileDisplay;
