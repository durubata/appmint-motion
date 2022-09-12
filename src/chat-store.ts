import { getTime, greetings } from './constants/utils';
import produce from 'immer';
import { FILETYPE } from 'components/chat-message';
import create from 'zustand';


//TODO move all state into ChatState
interface ChatMessageProps {
  sk?: string;
  pk?: string;
  datatype?: string;
  isnew?: boolean;
  version?: number
  data?: {
    content?: string;
    template?: string;
    title?: string;
    type?: string;
    deliveredTime?: number;
    sentTime?: number;
    readTime?: number;
    status?: string;
    from?: string;
    to?: string;
    files?: [];
    conversation?: string;
  }
}

interface UserProps {
  sk?: string;
  pk?: string;
  data?: {
    email?: string;
    username?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    title?: string;
    portrait?: string;
    lockout?: string;
    lockoutDate?: [];
    status?: string;
    language?: string;
    greeting?: string;
    timezone?: string;
  }
}

interface ChatStoreProps {
  user?: any;
  token?: any;
  sidebar?: string;
  messages?: any;
  statusUpdate?: any;
  contacts?: any;
  groups?: any;
  conversations?: { [key: string]: ChatMessageProps[] };
  message?: ChatMessageProps;
  socket: any;
  friends?: { [key: string]: UserProps[] };
  hasUpdate?: string[]
  myEmail?: string;
  activeFriend?: string,
  onMessage?: (data) => any
  onUpdate?: (data) => any
  onDelete?: (data) => any
  onJoinGroup?: (data) => any;
  onMessages?: (data) => any;
  onLeaveGroup?: (data) => any
  setStateItem?: (data) => any
  chatRequest?: () => any;
  getMessages?: (friendEmail) => any
  addFriend?: (friendEmail) => any
  getFriend?: (friendEmail) => any
}

interface FileItemsProps {
  fileType: FILETYPE;
  fileUrl: string;
  file: File;
  fileId?: number;
}

interface FileUploadStoreProps {
  fileItems: FileItemsProps[] | null;
  setFileItem: (items: FileItemsProps) => void;
  removeFileItem: () => void;
}

export const useFileUploadStore = create<FileUploadStoreProps>(set => ({
  fileItems: [],
  setFileItem: item => set(state => ({ fileItems: [...state.fileItems, item] })),
  removeFileItem: () => set({ fileItems: null }),
}));


export const useChatStore = create<ChatStoreProps>((set, get) => ({
  contacts: {},
  groups: {},
  hasUpdate: [],
  message: null,
  socket: null,
  conversations: {},
  friends: {},
  setStateItem: (item) => set((state) => ({ ...item })),
  onMessage: (message) => set((state) => {
    const conversations = JSON.parse(JSON.stringify(state.conversations))
    if (message.data.from === state.myEmail) {
      let messages = conversations[message.data.to]
      if (!Array.isArray(messages)) {
        conversations[message.data.to] = [message]
        return { conversations }
      }

      let messageIndex = messages.findIndex(item => item.sk === message.sk)
      if (messageIndex < 0) {
        messageIndex = messages.findIndex(item => (item.data.sentTime === message.data.sentTime && item.data.to === message.data.to))
      }
      if (messageIndex >= 0) {
        messages[messageIndex] = message
      } else {
        messages.push(message)
      }
      const hasUpdate = produce(state.hasUpdate, draft => {
        draft.push(message.data.to)
      })
      return { conversations, hasUpdate }
    }

    if (message.data.to === state.myEmail) {
      let messages = conversations[message.data.from]
      if (!Array.isArray(messages)) {
        conversations[message.data.from] = [message]
        return { conversations }
      }
      const messageIndex = messages.findIndex(item => item.sk === message.sk)
      if (messageIndex >= 0) {
        messages[messageIndex] = message
      } else {
        messages.push(message)
      }
      const hasUpdate = produce(state.hasUpdate, draft => {
        draft.push(message.data.from)
      })
      return { conversations, hasUpdate }
    }
  }),
  onUpdate: (update) => set((state) => {
    // const statusUpdate = { type: 'message-status', from:'', to:'', uid: '', status: ChatMessageStatus.Delivered };
    const conversations = JSON.parse(JSON.stringify(state.conversations))
    let messages = conversations[update.from]
    const tempIndex = messages.findIndex(item => item.sk === update.uid)
    if (tempIndex >= 0 && messages[tempIndex].data) {
      messages[tempIndex].data.status = update.status

      const hasUpdate = produce(state.hasUpdate, draft => {
        draft.push(update.from)
        draft.push(update.to)
      })

      return { conversations, hasUpdate }
    }
  }),
  onDelete: (data) => set(state => { return { message: data } }),
  onMessages: (messages: any[]) => set(state => {
    const conversations = produce(state.conversations, draft => {
      messages.map((message: any) => {
        if (message.data.from !== state.myEmail) {
          if (draft[message.data.from]) {
            const index = draft[message.data.from].findIndex(item => item.sk === message.sk)
            if (index >= 0) {
              draft[message.data.from][index] = message
            } else {
              draft[message.data.from].push(message)
            }
          } else {
            draft[message.data.from] = [message]
          }
        } else {
          if (draft[message.data.to]) {
            const index = draft[message.data.to].findIndex(item => item.sk === message.sk)
            if (index >= 0) {
              draft[message.data.to][index] = message
            } else {
              draft[message.data.to].push(message)
            }
          } else {
            draft[message.data.to] = [message]
          }
        }
      })
    })
    return { conversations }
  }),
  startConversation: (friendEmail: string) => set(state => ({ activeFriend: friendEmail })),
  getMessages: (friendEmail: string) => get().conversations[friendEmail],
  sendMessage: (to: string, content: string, files) => set((state) => {
    if (!state.activeFriend) {
      return { activeFriend: null }
    }
    const time = (new Date()).getTime()
    const newMessage = createData()
    newMessage.data = {
      to: to,
      content,
      files,
      status: 'pending',
      sentTime: time,
    };
    const conversations: any = produce(state.conversations, (draft: any) => {
      if (draft[to]) {
        draft[to].push(newMessage)
      } else {
        draft[to] = [newMessage]
      }
    })
    get().socket.emit('sendMessage', newMessage);
    return { conversations }
  }),
  chatRequest: () => {
    get().socket.emit('chatRequest', { chat: 'Info' });
  },
  addFriend: (friend) => set(state => {
    const friends = produce(state.friends, draft => {
      draft[friend.data.email] = friend
    })
    return { friends }
  }),
  getFriend: (friendEmail) => (get().friends[friendEmail])
}));

export interface ChatMessage {
  sender: string;
  message?: string;
  time?: string;
  receiver: string;
  messageId?: number;
  file?: JSX.Element;
}

interface MessageProps {
  chatMessages: ChatMessage[];
  setChatMessages: (chatMessage: ChatMessage) => void;
}

export const useMessageStore = create<MessageProps>(set => ({
  chatMessages: [
    {
      message: greetings(),
      messageId: Math.floor(Math.random() * 1000000),
      time: getTime(),
      receiver: 'user',
      sender: 'bot',
    },
  ],
  setChatMessages: ({ message, receiver, sender, file }) =>
    set(state => ({
      chatMessages: [
        ...state.chatMessages,
        {
          message,
          messageId: Math.floor(Math.random() * 1000000),
          time: getTime(),
          receiver,
          sender,
          file,
        },
      ],
    })),
}));


const createData = () => {
  const newData: ChatMessageProps = {
    pk: '',
    sk: '',
    datatype: 'chatmessage',
    data: {},
    isnew: true,
    version: 0
  };
  return newData;
}