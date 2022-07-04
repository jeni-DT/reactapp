import React, { Component } from 'react'

export default class First extends Component {
    constructor(props){
        super(props);
        this.state ={
            greetings:"welcome our home"}
            this.updateState = this.updateState.bind(this) 
        
    }
    updateState(){
        this.setState ( {greetings:"....Welcome our home page...."
        })
    }
  render() {
    return (
      <div><h1>MyApp</h1>
      <p>{this.state.greetings}</p>
      <button onClick={this.updateState}>Click</button></div>
    )
  }
}
