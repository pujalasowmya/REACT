import React from 'react'
class Message extends React.Component {
  msg = "Hello Sowmiii"
  gmHandler = () => {
    console.log(this.msg)
    this.msg = "GM Sowmi"
    console.log(this.msg)
    this.forceUpdate()
  }
  gnHandler = () => {
    console.log(this.msg)
    this.msg = "Gn Sowmi"
    console.log(this.msg)
    this.forceUpdate()
  }
  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <h2>Wish Message:{this.msg}</h2>
        
        <button onClick={this.gmHandler}>GM</button> 
       
        
        
        <button onClick={this.gnHandler}>GN</button>
        </div>
    )
  }
}
export default Message