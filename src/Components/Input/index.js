import { InputContainer, InputCont } from './style'

function Input({value}) {
    return (
      <InputContainer>
        <InputCont disabled value={value}/>
      </InputContainer>
    );
  }
  
  export default Input;