import { useChatStore } from 'chat-store';
import { useState, useRef } from 'react';
import FileUpload from './FileUpload/fileUpload';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { IconAttachment, IconEmoji, IconConnect } from './icons';

export type FILETYPE = 'video' | 'image' | 'application';
const iconSize = 16;

export const ChatMessage = props => {
  const [style, setStyle] = useState<any>({ display: 'none', position: 'absolute' });
  const ref = useRef();
  const [files, setFiles] = useState<{ path: string, url?: string }[]>(props.files);
  const [message, setMessage] = useState('');

  const { sendMessage, chatRequest } = useChatStore(state => state);

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handelEmojiButton = e => {
    if (style.display === 'none') {
      setStyle({ display: 'block', position: 'absolute', bottom: '100px', right: '0' });
    } else {
      setStyle({ display: 'none', position: 'absolute' });
    }
  };

  const handleEmojiValue = (e) => {
    setMessage(message + e.native);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    sendMessage(props.activeFriend, message, files)
    setMessage('')
    setFiles(null)
  };

  const handleConnect = (e) => {
    chatRequest();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSendMessage(event)
    }
  };

  return (
    <div className="flex items-start space-x-4 m-2">
      <div style={style} className="emoji">
        <Picker data={data} onEmojiSelect={handleEmojiValue} onFocus="true" previewPosition="none" theme="light" />
      </div>
      <div className="flex-shrink-0">
        <img
          className="inline-block h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 ">
            <textarea
              rows={1}
              name="comment"
              onChange={handleChange}
              value={message}
              onKeyPress={handleKeyPress}
              id="comment"
              className="block w-full p-2 resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:outline-none focus:ring-0"
              placeholder="Type something..."
            />

            <div className="py-2" aria-hidden="true">
              <div className="py-px">
                <div className="h-9" />
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
              <button className='rounded-xl  hover:scale-150 transition-all duration-150' onClick={handelEmojiButton}>
                <IconEmoji size={iconSize} />
              </button>
              <button className='rounded-xl hover:scale-150 transition-all duration-150' aria-label="upload file">
                <FileUpload />
                <IconAttachment size={iconSize} />
              </button>
              <button className='rounded-xl  hover:scale-150 transition-all duration-150' onClick={handleConnect} >
                <IconConnect size={iconSize} />
              </button>
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                onClick={onSendMessage}
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

