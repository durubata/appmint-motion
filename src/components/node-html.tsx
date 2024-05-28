export const ChatNodeHTML = (props) => {

    return (
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
    );
};
