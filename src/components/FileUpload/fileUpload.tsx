import { useFileUploadStore, useMessageStore } from 'chat-store';
import { FILETYPE } from 'components/chat-message';
import React from 'react';
import FileDisplay from './fileDisplay';

const FileUpload = () => {
  const { setFileItem, fileItems } = useFileUploadStore(state => state);
  const { setChatMessages } = useMessageStore(state => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.split('/')[0] as FILETYPE;
      setFileItem({ fileType: type, fileUrl: URL.createObjectURL(file), file, fileId: fileItems.length });
    }
  };

  const handleSentMessage = () => {
    setChatMessages({
      receiver: 'bot',
      sender: 'user',
      file: <FileDisplay fileId={fileItems.length} />,
    });

    setTimeout(() => {
      setChatMessages({
        message: 'Hello there!',
        receiver: 'user',
        sender: 'bot',
        file: <FileDisplay fileId={fileItems.length} />,
      });
    }, 1000);
  };

  return (
    <input
      hidden
      type="file"
      accept="image/*,video/*,application/*"
      onChange={e => {
        handleInputChange(e);
        handleSentMessage();
      }}
    />
  );
};

export default FileUpload;
