import React from 'react';


function Middlecat(props) {
    return(
        <div className="imgcat">
          <a href="/"><img src={props.imgs} alt="cat"></img></a>
          <a href="/"><img src={props.imgs} alt="cat"></img></a>
          <a href="/"><img src={props.imgs} alt="cat"></img></a>
        </div>
    );
}

export default Middlecat;