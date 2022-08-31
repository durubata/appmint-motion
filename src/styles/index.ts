import styled from '@emotion/styled';

interface Props {
  width?: any;
}

export const SCSidebar = styled.div<Props>`
  max-width: ${props => props.width};
`;

export const SCSidebarOpen = styled.div`
  background: #f5f5f5;
`;

export const SCSidebarClose = styled.div`
  background: #f5f5f5;
`;

export const SCSidebarButton = styled.div``;

export const SCDataViewToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
  > div {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 0 10px;
  }
`;

export const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

export const SCDataView = styled.div`
  padding: 8px;
  width: 100%;
  flex-grow: 2;
`;

export const SCRoot = styled.div`
  width: 400px;
  height: 700px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #efefef;
  overflow: hidden;
  box-shadow: 0px 0 5px 0px #ccc;
`;

export const SCHeader = styled.div`
  height: 60px;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
  box-shadow: 0px 0px 5px 1px #e6e6e6;
`;

export const SCActionButton = styled.div`
& button{
    border-radius: 10px;
    margin: 0.5rem 0 0 0;
    padding: 10px;
    min-width: initial;
    background: #fff;
    font-size: 1rem;
    box-shadow: 2px 1px 5px 1px #ccc;
    margin: 5px;
    border-radius: 10px;
    padding: 0.5rem;
    box-sizing: border-box;
    background-color: #fff;
    &:hover{
      background-color: #eee;
    }
  }
`;

export const SCProfileMini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  > div.profile-image {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
`;

export const SCProfile = styled.div`
  width: 100%;
  height: 100px;
`;

export const SCConvo = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  background-color: #fff;
  position: relative;
`;

export const SCSearch = styled.div`
  padding: 0.5rem;
  input {
    width: 100%;
    border: 0;
    border-radius: 0.25rem;
    padding: 0.5rem;
    box-shadow: 0 0 5px 1px #ccc;
    box-sizing: border-box;
  }
`;
export const SCMessage = styled.div`
  width: calc(100% - 1.5rem);
  height: 90px;
  position: absolute;
  padding: 0.75rem;
  bottom: 0;
  left: 0;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
  & .chat-message {
    margin-bottom: 0.25rem;
    position: relative;
  }
  & textarea {
    width: 100%;
    border: 0;
    box-shadow: 0 0 5px 1px #ccc;
    border-radius: 2px;
    padding: 5px 10px;
    box-sizing: border-box;
    &:focus-visible {
      outline: none;
      border: none;
    }
  }
  & button.chat-send-button {
    position: absolute;
    right: 0;
    top: 0px;
    height: 41px;
    border-radius: 0;
    width: 36px;
    padding: 4px;
    margin: 0;
    flex-grow: 0;
    min-width: initial;
    &:hover {
      background-color: #eee;
    }
  }
  .emoji{
    z-index: 1;
    cursor: pointer;
  }
`;

export const SCHisotry = styled.div`
  height: calc(100% - 190px);
  overflow: auto;
  padding: 0.25rem 1rem;
`;

export const SCChatBubble = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  

  & .bubble-left {
    background-color: #e8ffd8;
    border-radius: 1rem;
    padding: 1rem;
    max-width: 70%;
    margin: 0.5rem 0;
  }
  
  & .bubble-right {
    background-color: #e1f5ff;
    border-radius: 1rem;
    padding: 1rem;
    max-width: 70%;
    margin: 0.5rem 0;
  }
  
  & .message-delivered {
    border-left: 1px solid #36ff4d;
  }
  
  & .message-read {
    border-left: 1px solid #9bb6ff;
  }
  
  & .message-error {
    border-left: 1px solid #ff0000;
  }
  
  & .message-pending {
    border-left: 1px solid #fb9700;
  }
  .chats{
    display: flex;
    flex-direction: column;
    gap:4px;
    flex-wrap: wrap;
   
    
  }
  .chat-time{
  font-size:10px
  }
`;

export const SCSideBar = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  width: 100%;
  top: 80px;
  background-color: #ffffff;
  height: calc(100% - 70px);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px 0px #ccc;
  & .chat-contact {
    display: flex;
    border-radius: 0;
    padding: 0.75rem;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  
  & .chat-contact-image {
    border-radius: 50px;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }
  
  & .chat-contact-name {
    font-size: 10px;
    font-weight: bold;
  }
  
  & .chat-contact-email {
    font-size: 9px;
  }
  
  & .chat-contact-location {
    font-size: 9px;
  }
  
  & .chat-contact-toggle-button {
    position: absolute;
    top: 0;
    right: 80px;
  }
  
  input {
    width: 78%;
    margin: 0;
  }
  .chat-sidebar-content {
    width: 100%;
    top: 100%;
    overflow: auto;
    height: calc(100% - 120px);
  }
`;
