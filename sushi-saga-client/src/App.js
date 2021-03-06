import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    index: 0,
    eaten: [],
    budget: 100,
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({sushis: data}));
  }

  fourSushis = () => { 
    return this.state.sushis.slice(this.state.index, this.state.index + 4)
  }

  moreSushis = () => {
    if (this.state.index >= this.state.sushis.length - 4) {
      this.setState({index: 0})
    } else {
    this.setState(prevState => ({index: prevState.index + 4}))
    }
  }

  eatSushi = (sushi) => {
    if (this.state.budget >= sushi.price) {
      this.setState(prevState => ({eaten: [...prevState.eaten, sushi],
        budget: prevState.budget - sushi.price     
      }))
    }
  }

  updateBudget = (money) => {
    this.setState(prevState => ({budget: prevState.budget + parseInt(money)}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          fourSushis={this.fourSushis()} 
          moreSushis={this.moreSushis} 
          eatSushi={this.eatSushi}
          eaten={this.state.eaten}
          />
        <Table eaten={this.state.eaten} budget={this.state.budget}/>
        <SushiWallet updateBudget={this.updateBudget}/>
      </div>
    );
  }
}

export default App;