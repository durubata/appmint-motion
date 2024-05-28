import { useChatStore } from 'chat-store';
import { ChatNodeHTML } from './node-html';

export const ChatNodeChoice = (props) => {

    const { sendMessage } = useChatStore(state => state)
    const content = props.content || {}
    const config = content.config || {}

    const handleOptionClicked = (e, option) => {
        e.preventDefault()
        sendMessage(props.activeFriend, { ...content, input: { option } })
    }

    const getChoiceItem = (option) => {
        if (config.displayType === 'radio') {
            return (
                <div key={option} className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id={option}
                            aria-describedby={`${option}-description`}
                            name="plan"
                            type="radio"
                            onClick={e => handleOptionClicked(e, option)}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor={option} className="font-medium text-gray-900">
                            {option}
                        </label>
                        <p id={`${option}-description`} className="text-gray-500">
                            {option}
                        </p>
                    </div>
                </div>
            )

        }

        if (config.displayType === 'checkbox') {
            return (
                <div className="relative flex items-start">
                    <div className="flex h-6 items-center">
                        <input
                            id={option}
                            aria-describedby="comments-description"
                            name={option}
                            onClick={e => handleOptionClicked(e, option)}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                            {option}
                        </label>
                        <p id="comments-description" className="text-gray-500">
                            {option}
                        </p>
                    </div>
                </div>
            )
        }
        if (config.displayType === 'button') {
            return (
                <button key={option} onClick={e => handleOptionClicked(e, option)} className="chat-node-renderer-option w-full max-w-64  px-2 py-1 shadow rounded bg-cyan-50 hover:bg-sky-100">
                    {option}
                </button>
            )
        }
    }

    if (config.displayType === 'button') {
        return (
            <div className={`chat-node-renderer m-5`}>
                {config?.message && <ChatNodeHTML html={config.message} />}
                <div className={`chat-node-options w-full flex flex-col items-center justify-center gap-2`}>
                    {config.options?.map(option => getChoiceItem(option))}
                </div>
            </div>
        );
    }


    return (
        <div className={`chat-node-renderer  m-5`}>
            {config?.message && <ChatNodeHTML html={config.message} />}
            <div className={`chat-node-options w-full pe-5`}>
                <select
                    name={'select'}
                    onChange={e => handleOptionClicked(e, e.target.value)}
                    className="p-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                    {config.options?.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
