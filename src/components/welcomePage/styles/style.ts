import styled from '@emotion/styled';
import { IconForward } from 'components/icons';
import { css, Input } from '@mui/material';
interface IProps {
  extended?: boolean;
}

export const FlexJA = css`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ScWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  background-color: #03a84e;
  padding-top: 20px;
  height: 700px;

  .header-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    // height: 600px;
    position: relative;
    overflow-y: scroll;
    background-color: #fff;
    scroll: smooth;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(155, 155, 155, 0.5);
      border-radius: 20px;
      border: transparent;
    }
  }
`;

export const ScWelcomeHeader = styled.div`
  width: 100%;
  background-color: #03a84e;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  height: 290px;
  display: flex;
  margin: 0 auto;
  color: white;
  align-items: center;
  gap: 2px;
  flex-direction: column;

  h1 {
    margin-bottom: 3px;
  }

  p {
    font-size: 18px;
    font-weight: 100;
    width: 350px;
    color: #dfebe2;
    margin-bottom: 0px !important;
  }
`;

export const ScWelcomeConvo = styled.div`
  width: 90%;
  height: 400px;
  color: #000;
  flex-direction: column;
  margin-top: -50px;
  display: flex;
  align-items: left;
  gap: 10px;
  // background-color: #fff;
  font-family: 'Roboto', sans-serif;
  & .previous-chat {
    flex-direction: column;
    display: flex;
    gap: 10px;
    border: 1px solid lightgray;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
  }
  & .new-conversation {
    /* height: 50px; */
    padding: 10px 0px;
    /* box-shadow: 0px 1px 1px 1px lightgray; */
    background-color: #fff;
  }
  .primary__button {
    border: none;
    width: 100%;
    border-radius: 6px;
    margin: 0 auto;
    padding: 12px 8px;
    border-radius: 6px;
    background-color: #03a84e;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    color: white;
    gap: 6px;
    font-size: 16px;
    cursor: pointer;
  }
`;
export const ScwelcomeNewChat = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 0px 15px;
  gap: 10px;
  color: #000;
  &:hover {
    background-color: #f2f2f2;
  }
  &:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  .chat-image {
    border: 1px solid lightgray;
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }

  .chat-details {
    flex: 1;

    &--header {
      font-size: 16px !important;
      font-weight: bold;
    }
    p {
      margin: 4px 0;
      font-size: 13px;
      color: #3d3d3b;
    }
  }
  /* 
  > span:first-of-type {
    width: 18%;
    padding: 20px 0;
    border-radius: 10px;
    background: white;
    text-align: center;
  }
  > div {
    width: ${(props: IProps) => (props.extended ? '84%' : '70%')};
    display: flex;
    align-items: left;
    color: grey;
    gap: 8px;
    flex-direction: column;
  } */
`;
// export const ScWelcomeeButton = styled.div`
//   height: 80px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f2f2f2;
//   }
// `;
export const ScSvg = styled(IconForward)`
  width: 25px;
  height: 30px;
  color: #fff;
  background-color: #03a84e;
  border-radius: 5px;
  padding: 5px;
`;
export const CustomInput = styled(Input)`
  width: 100%;
  cursor: pointer;
`;
export const ScWelcomeChatHelp = styled.div`
  margin-top: 10px;
  color: grey;
  border: 1px solid lightgray;
  background-color: #fff;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 5px;
  align-items: center;
  padding-right: 1px;

  .search-input {
    display: flex;
    flex: 1;
    padding: 10px !important;
    align-items: center;

    > span {
      border-radius: 50%;
      background-color: lightgrey;
      ${FlexJA}
      padding: 3px 8px;
    }
  }
  & .search-button {
    background-color: #03a84e;
    width: 60px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    ${FlexJA}
  }
`;
export const ScWelcomeFooter = styled.div`
  color: grey;
  position: sticky;
  height: 70px;
  background-color: #fff;
  // box-shadow: 2px 2px 2px 0px lightgray;
  z-index: 10;
  width: 100%;
  bottom: 0;
  overflow: hidden;

  text-align: center;
`;
