import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { useChatStore } from "chat-store";
import { useState } from "react";

export const ChatNodeForm = (props) => {
    const { sendMessage } = useChatStore(state => state)
    const [formState, setFormState] = useState({});

    const content = props.content || {}
    const config = content.config || {}
    const { fields } = config || {};

    const onChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault()
        sendMessage(props.activeFriend, { ...content, input: formState })
    }

    return (
        <div className="p-10">
            <form className="chat-node-form flex flex-col  gap-3" onSubmit={onSubmit}>
                {fields?.map(field => {
                    const options = field?.options?.split(',');
                    if (options) {
                        return (
                            <div key={field.name} className="chat-node-form-field">
                                <label htmlFor={field.name} className="text-xs block font-medium leading-6 text-gray-900">{field.label}</label>
                                <select
                                    id={field.name}
                                    name={field.name}
                                    value={formState[field.name]}
                                    onChange={onChange}
                                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                >
                                    {options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    }

                    return (

                        <div key={field.name} className="chat-node-form-field">
                            <label htmlFor={field.name} className="text-xs block font-medium leading-6 text-gray-900">{field.label}</label>
                            <div className="relative rounded-md shadow-sm">
                                <input
                                    type={field.type}
                                    placeholder={field.label}
                                    id={field.name}
                                    name={field.name}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                                    value={formState[field.name]}
                                    onChange={onChange}
                                />
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div>
                            </div>
                            <p className="mt-1 text-xs text-red-600" id="email-error">
                                Not a valid email address.
                            </p>
                        </div>
                    );
                })}
                <div>
                    <button
                        type="submit"
                        className="flex w-full  mt-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
