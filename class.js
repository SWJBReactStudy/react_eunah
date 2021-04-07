
import { Component } from 'react';
import './App.css';
import fcat from './img/ho.jpg';
import scat from './img/he.jpg';
import tcat from './img/ha.jpg';


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        _id : 0,
        head : {name: 'MU YA-ONG'},
        img : [
          {id : 1, name: 'hodong', catimg : fcat},
          {id : 2, name: 'hwak', catimg : scat},
          {id : 3, name: 'myo', catimg : tcat}
        ]
      }
    }
    render(){
      var count = this.state._id;
      const _cat = this.state.img[this.state._id].catimg;
      const _name = this.state.img[this.state._id].name;

      console.log(this.state._id);

    return( 
      <div class="wrap">
        <div class="mooyaho">
          <header>
            <div class="logoboard">
              <img src={_cat} class="logo" alt="teat1234"></img>
            </div>
            <h1 class="my"><a href="/">{this.state.head.name}</a></h1>
          </header> 
          <div class="imgcat">
            <a href="/"><img src={_cat} alt="cat"></img></a>
            <a href="/"><img src={_cat} alt="cat"></img></a>
            <a href="/"><img src={_cat} alt="cat"></img></a>
          </div>
          <div class="gotohouse">
            <button class="Btn" onClick={function(e){
                  // e.preventDefault();
                  count++;
                  if (count==3) count=0;
                  this.setState({
                      _id : count
                  });
            }.bind(this)}>{_name}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
