import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super();
    this.state={
      sushis:[],
      sushiIndex: 0,
      allowance: 100,
      eatenSushi:[]
    }
  }

componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(sushis => {this.setState({sushis})})
}

eatSushi = (sushi) => {
  const newAllowance = this.state.allowance - sushi.price

  if(!this.state.eatenSushi.includes(sushi) && newAllowance >= 0){
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      allowance: newAllowance
    })
  }
}

grabSushi = () => {
  return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex+4)
}

moreSushis = () => {
  this.setState({
    sushiIndex: this.state.sushiIndex+4
  })
}

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.grabSushi()}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
          moreSushis={this.moreSushis} />
        <Table
          allowance={this.state.allowance}
          eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;