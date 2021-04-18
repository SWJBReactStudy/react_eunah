import { useState } from 'react';
import './App.css';
import Middlecat from './middlecat';
import Quiz from './Quiz';

import fcat from './img/ha.jpg';
import scat from './img/he.jpg';
import tcat from './img/ho.jpg';
import dong from './img/dong.png';



function App() {

const [cats/*, set_id*/] = useState({
    _id : 0,
    head :  'MU YA-ONG',
    img : [
      { name: 'myo', catimg : fcat},
      { name: 'hwak', catimg : scat},
      { name: 'hodong', catimg : tcat},
      { name: '동현신', catimg : dong}
    ]
  });

  const [count, setcount] = useState(0);
  const _catimg = cats.img[count /*cats._id*/].catimg;
  const _name = cats.img[count /*cats._id*/].name;
  const texta = Quiz.text;
  console.log(texta);

  const setimg = () =>{
    setcount((count)=> count+1 )
    if(count===3) setcount(0);
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
          <h1 className="my">{cats.head}</h1>
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
