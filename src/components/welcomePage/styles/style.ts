import styled from '@emotion/styled';
import { IconForward } from 'components/icons';
import {Input} from '@mui/material'
interface IProps {
  extended?: boolean;
}
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
    scroll:smooth;
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
  align-self: baseline;
  width: 100%;
  background-color: #03a84e;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  height: 300px;
  display: flex;
  margin: 0 auto;
  color: white;
  align-items: center;

  gap: 2px;
  flex-direction: column;
  > div > p {
    font-size: 20px;
    width: 350px;
  }
`;

export const ScWelcomeConvo = styled.div`
  width: 90%;
  height: 400px;
  paddign: 10px;
  position: absolute;
  top: 280px;
  color: #000;
  flex-direction: column;
  display: flex;
  align-items: left;
  gap: 10px;
  // background-color: #fff;
  font-family: 'Roboto', sans-serif;
  & .previous-chat {
    flex-direction: column; 
    display: flex;
    gap: 10px;
    box-shadow: 0px 1px 1px 1px lightgray;
    background-color: #fff;
    border-radius: 6px;
    padding: 10px;
  }
  & .new-conversation {
    height: 50px;
    padding: 10px;
    box-shadow: 0px 1px 1px 1px lightgray;
    background-color: #fff;
    border-radius: 6px;
    display: flex;
    align-items: center;
   
 
    >div{
      width: 96%;
      background-color: #03a84e;
      border-radius: 6px;
      margin:0 auto;
    
      >div{
        height: 30px;
        padding: 8px;
        border-radius: 6px;
        background-color: #03a84e;
        display:flex;
        margin:0 auto;
        width: 60%;
        align-items: center;
        gap: 10px;
        color: white;
        
      }
    
    }
   
  }
`;
export const ScwelcomeNewChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  cursor: pointer;
  padding: 4px;
  border-radius: 10px;
  gap: 8px;
  color: #000;
  &:hover {
    background-color: #f2f2f2;
  }

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
  }
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
cursor:pointer;
`
export const ScWelcomeChatHelp = styled.div`
  color: grey;
  height: 40px;
  box-shadow: 0px 0px 2px 1px lightgray;
  background-color: #fff;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  gap:5px;
  align-items: center;
  padding-right:1px;

  & .search-input{
    display: flex;
    flex:1;
    gap: 10px;
    align-items: center;
    >span{
      border-radius:50%;
      background-color: lightgrey;
      padding:4px 8px;
    }
  }
  & .search-button{
    background-color: #03a84e;
    height:fit-content;
    padding: 15px 18px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
  }
`;
export const ScWelcomeFooter = styled.div`
  color: grey;
  position: sticky;
  height:70px;
  background-color: #fff;
  // box-shadow: 2px 2px 2px 0px lightgray;
  z-index: 10;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  
  text-align: center;
`;
