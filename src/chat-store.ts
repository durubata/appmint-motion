import { produce } from 'immer';
import { FILETYPE } from 'components/chat-message';
import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const messageAudio = new Audio('/sounds/message.mp3');
const callAudio = new Audio('/sounds/call.mp3');
const playSound = () => {
  messageAudio.play()
    .then(() => {
      console.log("Audio played successfully");
    })
    .catch(error => {
      console.error("Error playing the audio", error);
    });
};

interface FormItems {
  name: string;
  email: string;
  phone: string;
}interface ChatMessageProps {
  sk?: string;
  pk?: string;
  datatype?: string;
  isNew?: boolean;
  version?: number
  data?: {
    content?: string;
    uuid?: string;
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
  sidebarOpen?: boolean;
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
  myEmail?: string;
  activeFriend?: string,
  timestamp: {}
  newitem?: string[],
  formItems?: FormItems;
  navigate?: any
  orgId?: string;
  chatId?: string;
  theme?: string;
  language?: string;
  onMessage?: (data) => any
  onUpdate?: (data) => any
  onDelete?: (data) => any
  onError?: (error, data) => any
  onJoinGroup?: (data) => any;
  onMessages?: (data) => any;
  onLeaveGroup?: (data) => any
  setStateItem?: (data) => any
  chatRequest?: () => any;
  getMessages?: (friendEmail) => any
  addFriend?: (friendEmail) => any
  getFriend?: (friendEmail) => any
  emit?: (key, message?) => any;
  setFormItems?: (items: FormItems) => void;
  sendMessage?: (to, message, files?) => any;
  startConversation?: (to) => any;
  updateMessageStatus?: (message: any, status: string) => any;
  getMessage?: (conversationId: string, messageId) => any;
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


export const useChatStore = create<ChatStoreProps>()((set, get) => ({
  contacts: {},
  groups: {},
  hasUpdate: [],
  timestamp: {},
  message: null,
  socket: null,
  conversations: {},
  newitem: [],
  friends: {},
  setStateItem: (item) => set((state) => { return { ...item } }),
  emit: (key, message) => {
    const socket = get().socket;
    if (socket && socket.connected) {
      socket.emit(key, message);
    } else {
      console.error('Trying to reconnect, try again soon')
    }
  },
  updateMessageStatus: (message: any, status: string) => {
    const statusUpdate = { type: 'message-status', from: message.data.from, to: message.data.to, uid: message.sk, status };
    if (status === 'read' && message?.data.from !== get().myEmail && message.data.status !== 'read') {
      get().emit('updateMessageStatus', statusUpdate);
    } else if (status === 'delivered' && message?.data.from !== get().myEmail && ['pending', null, 'new', ''].includes(message.data.status)) {
      get().emit('updateMessageStatus', statusUpdate);
    }
  },
  onMessage: (message) => set((state) => {
    state.updateMessageStatus(message, 'delivered');
    let isNew = false;

    const conversations = JSON.parse(JSON.stringify(state.conversations))
    let activeFriend;
    if (message?.data.from === state.myEmail) {
      let messages = conversations[message.data.to]
      if (!Array.isArray(messages)) {
        conversations[message.data.to] = [message]
        return { conversations }
      }

      const messageId = !!message.sk ? message.sk : message.data.uuid;
      let messageIndex = messages.findIndex(item => {
        const itemId = item.sk || item.data.uuid;
        return itemId === messageId
      })
      if (messageIndex < 0) {
        messageIndex = messages.findIndex(item => (item.data.uuid === message.data.uuid))
      }
      if (messageIndex >= 0) {
        messages[messageIndex] = message
      } else {
        messages.push(message)
      }
      return { conversations, timestamp: { ...state.timestamp, [message.data.to]: Date.now() } }
    } else if (message.data.to === state.myEmail) {
      let messages = conversations[message.data.from]
      activeFriend = message.data.from
      if (!Array.isArray(messages)) {
        conversations[message.data.from] = [message]
        isNew = true;
        return { conversations }
      }
      const messageId = !!message.sk ? message.sk : message.data.uuid;
      const messageIndex = messages.findIndex(item => {
        const itemId = item.sk || item.data.uuid;
        return itemId === messageId
      })
      if (messageIndex >= 0) {
        messages[messageIndex] = message
      } else {
        messages.push(message)
        isNew = true;
      }

      if (isNew) {
        playSound()
      }
      return { conversations, timestamp: { ...state.timestamp, [activeFriend]: Date.now() }, activeFriend }
    }
  }),
  onUpdate: (update) => set((state) => {
    // const statusUpdate = { type: 'message-status', from:'', to:'', uid: '', status: ChatMessageStatus.Delivered };
    console.log(update)
    const conversations = JSON.parse(JSON.stringify(state.conversations))
    const conversationId = update.from === state.myEmail ? update.to : update.from;
    let messages = conversations[conversationId]
    if (messages) {
      const tempIndex = messages.findIndex(item => item.sk === update.uid)
      if (tempIndex >= 0 && messages[tempIndex].data) {
        messages[tempIndex].data.status = update.status
        return { conversations, timestamp: { ...get().timestamp, [update.uid]: Date.now() } };
      }
    }
    return {}
  }),
  onDelete: (data) => set(state => { return { message: data } }),
  onMessages: (messages: any[]) => set(state => {
    const conversations = produce(state.conversations, draft => {
      messages.map((message: any) => {
        state.updateMessageStatus(message, 'delivered');

        const messageId = !!message.sk ? message.sk : message.data.uuid;
        if (message.data.from !== state.myEmail) {
          if (draft[message.data.from]) {
            const index = draft[message.data.from].findIndex(item => {
              const itemId = item.sk || item.data.uuid;
              return itemId === messageId
            })
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
            const index = draft[message.data.to].findIndex(item => {
              const itemId = item.sk || item.data.uuid;
              return itemId === messageId
            })
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
  getMessage: (conversationId: string, messageId: string) => {
    const messages = get().conversations[conversationId];
    if (messages) {
      const message = messages.find(message => message.sk === messageId);
      if (message) {
        get().updateMessageStatus(message, 'read');
        return message;
      }
      return
    }
    return null;
  },
  sendMessage: (to: string, content: string, files) => set((state) => {
    if (!get().user) {
      get().navigate('/register')
    }

    if (!to) {
      to = state.activeFriend || 'init-guest-chat'
    }

    const time = (new Date()).getTime()
    const newMessage = createData()
    newMessage.data = {
      uuid: uuidv4(),
      to,
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
    get().emit('sendMessage', newMessage);
    return { conversations, timestamp: Date.now() }
  }),
  chatRequest: () => {
    if (!get().user) {
      get().navigate('/register')
    }
    const { orgId, chatId, token, theme, language } = get()
    const time = (new Date()).getTime()
    const newMessage = createData()
    newMessage.data = {
      type: 'init-guest-chat',
      to: `${chatId}@mintflow.${orgId}`,//'askgpt.node-tspxkfq1@askgpt.demo', //`start@chatId.mintflow`,
      content: 'chat-request',
      status: 'pending',
      from: get().user?.data.email,
      sentTime: time,
    };
    get().emit('chatRequest', newMessage);

  },
  addFriend: (friend) => set(state => {
    const friends = produce(state.friends, draft => {
      draft[friend.data.email] = friend
    })
    return { friends }
  }),
  getFriend: (friendEmail) => (get().friends[friendEmail]),
  currentView: 'Welcome',
  formItems: {
    name: '',
    phone: '',
    email: '',
  },
  setFormItems: (items: FormItems) => set(state => ({ formItems: items })),
  onError: (error, data) => {
    console.error(error, data)
  }
}));


const createData = () => {
  const newData: ChatMessageProps = {
    pk: '',
    sk: '',
    datatype: 'chatmessage',
    data: {},
    isNew: true,
    version: 0,
  };
  return newData;
}