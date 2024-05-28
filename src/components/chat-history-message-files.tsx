import { imgExts, videoExts } from 'helpers';
import React, { useEffect, useState } from 'react';
import { RiFileDownloadLine } from 'react-icons/ri';

export const ChatHistoryMessageFile = ({ files }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [images, setImages] = useState([{ src: '' }]);
  const [videos, setVideos] = useState<any[]>();
  const [otherFiles, setOtherFiles] = useState<any[]>();

  useEffect(() => {
    if (Array.isArray(files) && files.length > 0) {
      setImages(files.filter(file => isImage(file)).map(file => ({ src: file.url })));
      setVideos(files.filter(file => isVideo(file)));
      setOtherFiles(files.filter(file => isNotVideoOrImage(file)));
    } else if (files && files?.url) {
      if (isImage(files)) {
        setImages([{ src: files.url }])
      } else if (isVideo(files)) {
        setVideos([files])
      } else {
        setOtherFiles([files])
      }
    }
  }, [files]);

  const isImage = file => {
    const ext = file.path.slice(-3);
    return imgExts.includes(ext);
  };

  const isVideo = file => {
    const ext = file.path.slice(-3);
    return videoExts.includes(ext);
  };

  const isNotVideoOrImage = file => {
    const ext = file.path.slice(-3);
    return !(imgExts.includes(ext) || videoExts.includes(ext));
  };
  const gotoPrevImg = e => {
    console.log(e);
  };
  const gotoNextImg = e => {
    console.log(e);
  };

  // <FileIcon size={24} extension={ext} {...defaultStyles[ext]} />;
  return (
    <div className="message-bubble-files">
      <div className="message-bubble-file">
        {images && (
          <>
            {/* <ImageList>
              {images.map(image => (
                <ImageListItem key={image.src}>
                  <div style={{ width: 100, height: 100, marginTop: '10px' }}>
                    <img src={image.src} alt="images" width="100%" style={{ cursor: 'pointer' }} onClick={() => setIsImageOpen(true)} />
                  </div>
                </ImageListItem>
              ))}
            </ImageList> */}
            {/* <ImgsViewer imgs={images} isOpen={isImageOpen} backdropCloseable={true} onClose={() => setIsImageOpen(false)} onClickPrev={gotoPrevImg} onClickNext={gotoNextImg} /> */}
            {images.map((image, idx) => (
              <div key={idx} style={{ width: 100, height: 100, marginTop: '10px' }}>
                <img src={image.src} alt="images" width="100%" style={{ cursor: 'pointer' }} onClick={() => setIsImageOpen(true)} />
              </div>
            ))}
          </>
        )}

        {videos &&
          videos.map((video, idx) => (
            <div key={idx} style={{ width: 100, height: 100, marginTop: '10px' }}>
              <video id="video" src={video.url} controls width={200} height={200}></video>
            </div>
          ))}
        {otherFiles &&
          otherFiles.map((file, idx) => (
            <a key={idx} href={file.url} style={{ marginTop: '30px', cursor: 'pointer', color: 'grey', display: 'block' }} download>
              <RiFileDownloadLine style={{ fontSize: '40px' }} />
              <div>{file.file.path}</div>
            </a>
          ))}
      </div>
    </div>
  );
};
