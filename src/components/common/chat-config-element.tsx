import { useChatStore } from 'chat-store';
import React, { useRef } from 'react';
import { classNames } from 'utils';

export const ChatConfigElement = (props: any) => {
  const { path, type, className } = props;
  const { chatConfig } = useChatStore(state => state, (o, v) => o.chatConfig === v.chatConfig)

  const elementRef = useRef(null);

  const getStyle = () => {
    const configStyle = chatConfig?.data?.content[path] ? chatConfig?.data?.content[path].style : {};
    const { data, style = {} } = props;
    return { ...style, ...configStyle };
  }

  const style = getStyle()

  let TAG: any = 'div';
  if (type === 'button') {
    TAG = 'button';
  }

  if (type === 'img') {
    return <img ref={elementRef} id={path} data-path={props.path} style={style} className={classNames(className, 'chat-element')} src={props.src} alt={props.alt} />
  }
  return (
    <TAG ref={elementRef} id={path} data-path={props.path} style={style} className={classNames(className, 'chat-element')}>
      {props.children}
    </TAG>
  );
};
