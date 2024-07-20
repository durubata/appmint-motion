import { ChatNodeHTML } from "./node-html";

export const ChatNodeCard = (props: { title?, children?, html?}) => {
    return (
        <div className="p-10">
            <div className="bg-white shadow sm:rounded-lg">
                <div className="p-3">
                    {props.title && <h3 className="text-base mb-5 font-semibold leading-6 text-gray-900">{props.title}</h3>}
                    {props.children &&
                        <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                            {props.children}
                        </div>
                    }
                    {props.html &&
                        <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                            <ChatNodeHTML html={props.html} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};
