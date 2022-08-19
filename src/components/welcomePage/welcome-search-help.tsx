import React from 'react'
import { ScWelcomeChatHelp } from './styles/style';
import { CustomInput } from './styles/style';
import { IconSearchs } from 'components/icons';
// interface Iprops{
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

const WelcomeSearchHelp = () => {
  const [state, setState] = React.useState({
    blur: false,
    inputValue: ''
  });

  const handleChange=(e:any)=>{
  setState({
    ...state,
    inputValue: e.target.value
  })

  }
  const handleClick=(e:any)=>{
    setState({
      ...state,
      inputValue: ''
    })
  }
 
  return (
    <ScWelcomeChatHelp>
      <div className='search-input'>
        <CustomInput placeholder='search for answers' type='text' onChange={handleChange} value={state.inputValue} disableUnderline={true}  />
        {
          state.inputValue.length > 1 &&  <span onClick={handleClick}>x</span>
        }
       
      </div>
      <div className='search-button'>
        <IconSearchs />
      </div>


    </ScWelcomeChatHelp>
  )
}

export default WelcomeSearchHelp