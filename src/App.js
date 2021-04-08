import { useState } from 'react';
import './App.css';
import fcat from './img/ha.jpg';
import scat from './img/he.jpg';
import tcat from './img/ho.jpg';


function App() {

  const [cats, set_id] = useState({
    _id : 0,
    head :  'MU YA-ONG',
    img : [
      { name: 'hodong', catimg : fcat},
      { name: 'hwak', catimg : scat},
      { name: 'myo', catimg : tcat}
    ]
  });
  
  const setimg = () =>{
    count++;
    if(count==3) count=0;
    set_id({
      _id : count 
    });
  }

  const count = cats._id;
  const _catimg = cats.img[cats._id].catimg;
  const _name = cats.img[cats._id].name;

  return (
    <div className="wrap">
      <div className="mooyaho">
        <header>
          <div className="logoboard">
            <img src={_catimg} className="logo" alt="teat1234"></img>
          </div>
          <h1 className="my"><a href="/">{cats.head}</a></h1>
        </header> 
        <div className="imgcat">
          <a href="/"><img src={_catimg} alt="cat"></img></a>
          <a href="/"><img src={_catimg} alt="cat"></img></a>
          <a href="/"><img src={_catimg} alt="cat"></img></a>
        </div>
        <div className="gotohouse">
            <button className="Btn" onClick={setimg}>{_name}</button>
          </div>
      </div>
    </div>
  );
}

export default App;
