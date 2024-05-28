import { WelcomeConvo, WelcomeFooter, WelcomeHeader } from 'components/welcomePage';

export const WelcomePage = () => {
  return (
    <div className="welcome container">
      <div className="header-main">
        <WelcomeHeader />
        <WelcomeConvo />
      </div>
      <WelcomeFooter />
    </div>
  );
};



// export const ScWelcome = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
//   position: relative;
//   background-color: #03a84e;
//   padding-top: 20px;
//   height: 700px;

//   .header-main {
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 20px;
//     // height: 600px;
//     position: relative;
//     overflow-y: auto;
//     background-color: #fff;
//     ::-webkit-scrollbar {
//       width: 4px;
//     }
//     ::-webkit-scrollbar-track {
//       background: transparent;
//     }
//     ::-webkit-scrollbar-thumb {
//       background-color: rgba(155, 155, 155, 0.5);
//       border-radius: 20px;
//       border: transparent;
//     }
//   }
// `;

