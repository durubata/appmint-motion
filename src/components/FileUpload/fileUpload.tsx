import React from 'react';
import { useFileUploadStore, useChatStore } from 'chat-store';
import { FILETYPE } from 'components/chat-message';

const FileUpload = () => {
  const { setFileItem, fileItems } = useFileUploadStore(state => state);
  const { activeFriend, sendMessage } = useChatStore(state => state);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.split('/')[0] as FILETYPE;
      setFileItem({ fileType: type, fileUrl: URL.createObjectURL(file), file, fileId: fileItems.length });
    }
  };

  const handleSentMessage = () => {
    sendMessage(activeFriend, 'file', fileItems);
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
