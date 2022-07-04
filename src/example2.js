import React, { Component } from 'react'

export default class Favorite extends Component {
    constructor(props){
        super(props);
    this.state = {favoritefood:"Biriyani"};
    }
    // static getDerivedStateFromProps(props, state) {
    //     return {favoritefood: props.favfood };
    //   }
    componentDidMount() {
        setTimeout(() => {
          this.setState({favoritefood: "Lemon rice"})
        }, 1000)
      }
  render() {
    return (
      <div id='render'>
        <h2>Mounting</h2>
          <p>
             <b> My favoritefood is{this.state.favoritefood}</b>
          </p>
      </div>
    );
  }
}
