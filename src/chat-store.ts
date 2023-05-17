import { produce } from 'immer';
import { FILETYPE } from 'components/chat-message';
import { create } from 'zustand';
import { getTime, greetings } from 'constants/utils';
interface FormItems {
  name: string;
  email: string;
  phone: string;
}interface ChatMessageProps {
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
  hasUpdate?: string[]
  myEmail?: string;
  activeFriend?: string,
  newitem?: string[],
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
  formItems?: FormItems;
  setFormItems?: (items: FormItems) => void;
  sendMessage?: (to, message, files?) => any;
  navigate?: any
  startConversation?: (to) => any;
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
  message: null,
  socket: null,
  conversations: {},
  newitem: [],
  friends: {},
  setStateItem: (item) => set((state) => { return { ...item } }),
  onMessage: (message) => set((state) => {
    const conversations = JSON.parse(JSON.stringify(state.conversations))
    let activeFriend;
    if (message?.data.from === state.myEmail) {
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
    } else if (message.data.to === state.myEmail) {
      let messages = conversations[message.data.from]
      activeFriend = message.data.from
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
      return { conversations, hasUpdate, activeFriend }
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
            const index = draft[message.data.from].findIndex(item => item.sk === message.sk && item.data.sentTime === message.data.sentTime)
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
            const index = draft[message.data.to].findIndex(item => item.sk === message.sk && item.data.sentTime === message.data.sentTime)
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
    if (!get().user) {
      get().navigate('/register')
    }

    if (!to) {
      to = state.activeFriend || 'init-guest-chat'
    }

    const time = (new Date()).getTime()
    const newMessage = createData()
    newMessage.data = {
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
    get().socket.emit('sendMessage', newMessage);
    return { conversations }
  }),
  chatRequest: () => {
    if (!get().user) {
      get().navigate('/register')
    }

    const time = (new Date()).getTime()
    const newMessage = createData()
    newMessage.data = {
      type: 'init-guest-chat',
      to: 'guest-chat',
      content: 'chat-request',
      status: 'pending',
      from: get().user.data.email,
      sentTime: time,
    };
    get().socket.emit('chatRequest', newMessage);

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
}));


const createData = () => {
  const newData: ChatMessageProps = {
    pk: '',
    sk: '',
    datatype: 'chatmessage',
    data: {},
    isnew: true,
    version: 0,
  };
  return newData;
}