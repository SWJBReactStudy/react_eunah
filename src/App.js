import { useState } from 'react';
import './App.css';

import fcat from './img/ho.jpg';
import scat from './img/he.jpg';
import tcat from './img/ha.jpg';
import Middlecat from './middlecat';
import Quiz from './Quiz';

function App() {

const [cats/*, set_id*/] = useState({
    _id : 0,
    head :  'MU YA-ONG',
    img : [
      { name: 'hodong', catimg : fcat},
      { name: 'hwak', catimg : scat},
      { name: 'myo', catimg : tcat}
    ]
  });

  const [count, setcount] = useState(0);
  const _catimg = cats.img[count /*cats._id*/].catimg;
  const _name = cats.img[count /*cats._id*/].name;
  const texta = Quiz.text;
  console.log(texta);

  const setimg = () =>{
    setcount((count)=> count+1 )
    if(count===2) setcount(0);
    // set_id((aa)=>({
    //   ...aa,
    //   _id : count 
    // }));
    if(texta==='hodong') setcount(0);
  }

  const destructuring = {
    state: {
      import: {
        what: 'cat',
        name: ['candy', 'butterfly', 'baby']
      }
    },
    how: 3
  };

  const {
    state: {
      import : {what, name}
    },
    how
  } = destructuring; //destructuring의 값들을 꺼내오는 거

  const aa = {
    what,
    name,
    how
  };

  console.log(aa); //what : 'cat', name : array(3), how : 3

  return (
    <div className="wrap">
      <div className="mooyaho">
        <header>
          <div className="logoboard">
            <img src={_catimg} className="logo" alt="teat1234"></img>
          </div>
          <h1 className="my"><a href="/">{cats.head}</a></h1>
        </header> 
        <Middlecat imgs={_catimg}/>
        <div className="gotohouse">
            <button className="Btn" onClick={setimg}>{_name}</button>
        </div>
    </div>
    <Quiz />
  </div>
  );
}

export default App;
