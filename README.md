# Appmint Chat Client

A flexible and easy-to-use chat client for React applications, designed to work with any Socket.IO-compatible backend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time messaging using Socket.IO
- Customizable UI components
- Support for text, emojis, and file attachments
- Typing indicators
- Read receipts
- User presence detection
- Easily integrable with any Socket.IO backend

## Installation

Install the package using npm:

```bash
npm install react-chat-client
```

Or using yarn:

```bash
yarn add react-chat-client
```

## Usage

Here's a basic example of how to use the React Chat Client in your application:

```jsx
import React from 'react';
import { AppmintChatClient } from '@appmint/chat';

const App = () => {
  return (
    <AppmintChatClient
      socketUrl="https://your-socket-server.com"
      userId="user123"
      username="John Doe"
    />
  );
};

export default App;
```

## Configuration

The ChatClient component accepts the following props:

- `socketUrl` (required): The URL of your Socket.IO server
- `userId` (required): The unique identifier for the current user
- `username` (required): The display name of the current user
- `theme` (optional): Custom theme object for styling
- `onMessageSent` (optional): Callback function triggered when a message is sent
- `onMessageReceived` (optional): Callback function triggered when a message is received

## API Reference

### Appmint Chat Client

The main component that renders the chat interface.

Props:

- `socketUrl: string` - The URL of the Socket.IO server
- `userId: string` - The unique identifier for the current user
- `username: string` - The display name of the current user
- `theme?: object` - Custom theme object for styling
- `onMessageSent?: (message: Message) => void` - Callback for sent messages
- `onMessageReceived?: (message: Message) => void` - Callback for received messages

### useChat

A custom hook for integrating chat functionality into your own components.

```jsx
import { useChat } from '@appmint/chat';

const MyComponent = () => {
  const { messages, sendMessage, isTyping } = useAppmintChat({
    socketUrl: 'https://your-socket-server.com',
    userId: 'user123',
    username: 'John Doe',
  });

  // Use the chat functionality in your component
};
```

## Contributing

We welcome contributions to the React Chat Client! Please see our [Contributing Guide](CONTRIBUTING.md) for more details on how to get started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

npx tailwindcss -i ./src/styles/global.dev.css -o ./src/styles/global.css --watch

s3cmd put --recursive --acl-public /Users/_projects/db_git/chat-client/build/* s3://fundu-space-sfo3-dev/appmint-chat/
s3cmd del --recursive s3://fundu-space-sfo3-dev/appmint-chat/
