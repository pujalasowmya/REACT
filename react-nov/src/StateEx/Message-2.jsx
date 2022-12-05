import React, { Component } from 'react'

class Enter extends Component {
    state = {
        msg: "Hello,Gm Sowmya"
    }
    gmHandler = () => {
        this.setState({msg: "Good Morning,Sowmya"})
    }
    gnHandler = () => {
        this.setState({msg: "Good Night,Sowmya"})

    }
  render() {
    console.log("First time")

    return <div>
        <h1>Message Value:{this.state.msg}</h1>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
        

    </div>
      
    
  }
}

export default Enter