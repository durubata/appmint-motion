import { useFileUploadStore } from 'chat-store';
import { FILETYPE } from 'components/chat-message';
import React, { useEffect, useState } from 'react';

const FileUpload = () => {
  const { fileItems, setFileItems, removeFileItems } = useFileUploadStore(state => state);

  const [file, setFile] = useState<File>();

  const handleInputChange = () => {
    if (file) {
      const type = file.type.split('/')[0] as FILETYPE;

      if (type === 'image') {
        setFileItems({ fileType: 'image', fileUrl: URL.createObjectURL(file), file });
      }
      if (type === 'application') {
        setFileItems({ fileType: 'application', fileUrl: URL.createObjectURL(file), file });
      }
      if (type === 'video') {
        setFileItems({ fileType: 'video', fileUrl: URL.createObjectURL(file), file });
      }
    }
  };

  useEffect(() => {
    handleInputChange();

    if (fileItems) {
      return () => {
        URL.revokeObjectURL(fileItems.fileUrl);
        removeFileItems();
      };
    }
  }, [file]);
  return <input hidden type="file" accept="image/*,video/*,application/*" onChange={e => setFile(e.target.files[0])} />;
};

export default FileUpload;
