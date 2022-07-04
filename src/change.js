import React, { Component } from 'react'

export default class Create extends Component {
    constructor(props){
        super(props);
        this.state={Name:"Jeni"};
        
    }
    
    // shouldComponentUpdate(){
    //     return true;
    // }
    // Changes= ()=>{
    //     this.setState({Name:"Asha"})
    // }
    componentDidMount() {
        
        setTimeout(() => {
        
          this.setState({Name: "Hensha"})
         
        }, 2000)
        
      }
    // getSnapshotBeforeUpdate(prevProps,prevState){
    //     document.getElementById("rock1").innerHTML= "Your name is before"+prevState.Name;

    // }
    componentDidUpdate(){
        document.getElementById("rock2").innerHTML="Now is your updated name is" +this.state.Name;
    }

  render() {
    return (
      <div id='huf'>
          <h2>Update</h2>
          <p> My Name is {this.state.Name}</p>
          <div id='rock1'></div>
          <div id='rock2'></div>
          {/* <button onClick={this.Changes}>Update</button> */}
      </div>

    )
  }
}
