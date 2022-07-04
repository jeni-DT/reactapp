import React from "react";
class Firstone extends React.Component{
    constructor(){
        super();
        this.state = {
            initial: true
        }
    }
    Destroy = () => {
        this.setState({
            initial: false
        })
    }
    render(){
        let next;
        if(this.state.initial){
            next = <Remove />
        }
        return(
            <div id="hd">
                <h2>Unmounding</h2>
                {next}
                
                <button style={{backgroundColor:'blue'}} onClick={this.Destroy}>Delete</button>
                
            </div>
        );
    }
}
class Remove extends React.Component{
    componentWillUnmount(){
        alert('now your data was destroy!');
    }
    render(){
        return(
            <div>
                
                  <p><b>Hello EveryOne</b></p>
            </div>
        );
    }
}
export default Firstone