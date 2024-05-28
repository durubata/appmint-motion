import { useChatStore } from 'chat-store';
import { ChatNodeHTML } from './node-html';
import { ChatNodeForm } from './node-form';
import { ChatNodeChoice } from './node-choice';
import { ChatNodeCard } from './node-card';
import { statusLClasses, statusRClasses } from 'helpers';

export const ChatNodeRenderer = (props) => {
    const { sendMessage } = useChatStore(state => state)
    const { content, sentTime, status } = props.message?.data || {}
    const config = content.config || {}

    console.log(props.message);
    const handleOptionClicked = (e, option) => {
        e.preventDefault()
        sendMessage(props.activeFriend, { ...content, input: { option } })
    }

    if (config.nodeType === 'TextResponse') {
        return config?.message && <ChatNodeCard html={config.message} />
    }

    if (config.nodeType === 'FormInput') {
        return <ChatNodeForm content={content} />
    }

    if (config.nodeType === 'ChoiceInput') {
        return <ChatNodeChoice content={content} />
    }

    if (config.nodeType === 'TrainGPT') {
        let rtArray: any = [...(content?.data.data || [])]
        rtArray = rtArray.reverse()[0]
        console.log('TrainGPT', rtArray)
        const text = rtArray.content.map(item => item.text?.value).join(' ')
        return (
            <div className='flex justify-between relative'>
                <div className={`bubble-left bg-[#e8ffd8] flex justify-between relative max-w-[70%] p-3 rounded-xl mb-4 mt-2 min-w-[100px] ` + statusLClasses[status]}>
                    <div className="chats w-full text-sm">
                        {text}
                        <div className="chat-time text-[9px] top-[-15px] text-[#000000aa] left-0 absolute">{new Date(sentTime).toLocaleTimeString()}</div>
                    </div>
                </div>
                <div className="bubble-spacer"></div>
            </div>
        )
    }

    return (
        <div className={`chat-node-renderer ${props.message.id} m-5`}>
            {config?.message && <ChatNodeHTML html={config.message} />}
            <div className={`chat-node-options w-full flex flex-col items-center justify-center gap-2`}>
                {config.options?.map(option => {
                    return (
                        <button key={option} onClick={e => handleOptionClicked(e, option)} className="chat-node-renderer-option w-full max-w-64  px-2 py-1 shadow rounded bg-cyan-50 hover:bg-sky-100">
                            {option}
                        </button>
                    )
                })}
            </div>
        </div>
    );
};
