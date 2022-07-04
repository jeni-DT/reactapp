// import React from "react";
// class Car extends React.Component {
//     render() {
//       return <h2>I am a Car!</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//         </div>
//       );
//     }
//   }

import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props){
        super(props);
        this.state={
            like:0
        };
    }
    Addcount(){
        this.setState({like:this.state.like+1});
      }
    Lesscount () {
        this.setState({like:this.state.like-1});
      }
    Resetcount(){
        this.setState
            
        ({
            like:0
            })
        
      }
  render() {
    return (
<div id='first'>
    <h2>Increase the count using button</h2>
    <p><b> like{this.state.like}</b></p>
    <button id='like'style={{backgroundColor:'green'}} onClick={()=>this.Addcount()} >Like</button>
    <button id='dislike'style={{backgroundColor:'red'}} onClick={()=>this.Lesscount()} >Dislike</button>
    <button id='reset' style={{backgroundColor:'yellow'}} onClick={()=>this.Resetcount()} >Reset</button>
</div>
    )
  }
}

  