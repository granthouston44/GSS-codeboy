import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class RpsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      player: {name:"", choice:"", wins:0}
    }
  }

  handleLeftClick(){
    console.log("Left");
  }
  handleRightClick(){
    console.log("Right");
  }
  handleUpClick(){
    console.log("Up");
  }
  handleDownClick(){
    console.log("Down");
  }
  handleAClick(){
    console.log("A");
  }
  handleBClick(){
    console.log("B");
  }
  handleStartClick(){
    console.log("Start");
  }

  render(){
    return (
      <div className="main-content">
        <p>Rock Paper Scissors!</p>
        <img src="/assets/Gameboy.svg" style={{height: "92vh"}}/>
      </div>
    )
  }
}

export default RpsContainer
