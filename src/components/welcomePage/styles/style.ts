import styled from "@emotion/styled";

export const ScWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color:lightgray;
  position: relative;
 
    `

export const ScWelcomeHeader = styled.div`
  align-self:baseline;
  width: 100%;
  background-color: #03a84e;
  color:white;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  height: 350px;
  display: flex;
  margin:0 auto;
  align-items: center;
  gap: 2px;
  flex-direction: column;
  padding-top:30px;
    >div >p{
      font-size: 20px;
      width:350px;
    }
  `

  export const ScWelcomeConvo = styled.div`
  width: 90%;
  background-color: #fff;
  border-radius: 10px;
  height: 200px;
  paddign: 10px;
  position:absolute;
  top:320px;
  display:flex;
  flex-direction:column;
  align-items:left;
  gap:10px;
  justify-content:space-between;
  padding:10px;
 
  font-family: 'Roboto', sans-serif;
  
  `
  export const ScwelcomeNewChat = styled.div`
  display:flex;
  
  height:80px;
  cursor:pointer;
  &:hover{
    background-color: #f2f2f2;
  }
>span{
  height:100%;
  width:33.3%;
}
  `
  export const ScWelcomeeButton = styled.div`
  height:80px;
  cursor:pointer;
  &:hover{
    background-color: #f2f2f2;
  }
  `