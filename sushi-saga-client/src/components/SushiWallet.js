import React, { Component } from 'react'

export default class SushiWallet extends Component {

  state = {
    money: '',
  }

  onChange = (event) => {
    this.setState({money: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateBudget(this.state.money);
    this.setState({ money: ''})
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Add to your balance:
          <input type="number" name="money" onChange={this.onChange} value={this.state.money}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
