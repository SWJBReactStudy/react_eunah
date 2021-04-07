import './App.css';
import fcat from './img/ha.jpg';
import scat from './img/he.jpg';
import tcat from './img/ho.jpg';


function App() {

  const cats = [
    {
      head : {name: 'MU YA-ONG'},
      img : [
        {id : 1, name: 'hodong', catimg : fcat},
        {id : 2, name: 'hwak', catimg : scat},
        {id : 3, name: 'myo', catimg : tcat}
      ]
    }
  ];

  const setimg = () =>{
    if(_id>2) setcatimg(count => count+1);
    else setcatimg(0);
  }

  const [_id, ] = useState(0);

  var count = _id;
  const _cat = cats.img[cat._id].cating;
  const _name = cats.img[cat._id].name;

  return (
    <div class="wrap">
      <div class="mooyaho">
        <header>
          <div class="logoboard">
            <img src={fcat} class="logo" alt="teat1234"></img>
          </div>
          <h1 class="my"><a href="/">{this.state.head.name}</a></h1>
        </header> 
        <div class="imgcat">
          <a href="/"><img src={_cat} alt="cat"></img></a>
          <a href="/"><img src={_cat} alt="cat"></img></a>
          <a href="/"><img src={_cat} alt="cat"></img></a>
        </div>
        <div class="gotohouse">
            <button class="Btn" onClick={setimg}>{_name}</button>
          </div>
      </div>
    </div>
  );
}

export default App;
