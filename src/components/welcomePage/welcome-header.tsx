import { useChatStore } from "chat-store"
import { ChatConfigElement } from "components/common/chat-config-element"

export const WelcomeHeader = () => {
    const { chatConfig } = useChatStore(state => state, (o, v) => o.chatConfig === v.chatConfig)

    return (
        <div className="relative isolate overflow-hidden bg-gray-900">
            <ChatConfigElement path='chat-header' className="relative isolate overflow-hidden bg-gray-900 py-10">
                {chatConfig?.data?.content?.logo?.url && (
                    <ChatConfigElement type='img' alt="Chat Logo" src={chatConfig?.data?.content?.logo?.url} path='chat-logo' className="p-10" >
                    </ChatConfigElement>
                )}
                <ChatConfigElement path='chat-description' className="mx-auto max-w-7xl px-6">
                    {chatConfig?.data?.content?.headerContent ? (
                        <div dangerouslySetInnerHTML={{ __html: chatConfig?.data?.content?.headerContent as string }}></div>
                    ) : (
                        <>
                            <h2 className="text-xl font-bold tracking-tight text-white mt-0">Welcome</h2>
                            <h2 className="text-4xl font-bold tracking-tight text-white">Appmint Chat</h2>
                            <p className="mt-6 text text-gray-300">
                                We're here to help you 24x7
                            </p>
                            <p className="mt-1 text-sm text-gray-300/80"> Search Our Knowledge Base or Start a Chat</p>
                        </>
                    )}
                </ChatConfigElement>
            </ChatConfigElement>
        </div>
    )
}
