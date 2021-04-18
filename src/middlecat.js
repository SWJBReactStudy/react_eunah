import React from 'react';


function Middlecat(props) {
    return(
        <div className="imgcat">
          <img src={props.imgs} alt="cat"></img>
          <img src={props.imgs} alt="cat"></img>
          <img src={props.imgs} alt="cat"></img>
        </div>
    );
}

export default Middlecat;