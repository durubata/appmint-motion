import { useFileUploadStore } from 'chat-store';
import { FILETYPE } from 'components/chat-message';
import React from 'react';

const FileUpload = () => {
  const { fileItems, setFileItems } = useFileUploadStore(state => state);
  console.log(fileItems);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      const type = file.type.split('/')[0] as FILETYPE;
      setFileItems({ fileType: type, fileUrl: URL.createObjectURL(file), file });
    }
  };

  return <input hidden type="file" accept="image/*,video/*,application/*" onChange={handleInputChange} />;
};

export default FileUpload;
