import { useState } from 'react';
import App from './App';



function Quiz() {
  const [text, setText] = useState('aaa');
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
    App.texta = {text};
  };

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>확인</button> 
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default Quiz;