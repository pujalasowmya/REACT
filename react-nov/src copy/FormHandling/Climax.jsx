import React, { Component } from 'react'

 class Climax extends Component {
    state = {
        userName: "",
        email: "",
        mobile: "",
        password: ""
    }
    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <prev>{JSON.stringify(this.state)}</prev>
        <form onSubmit={this.submitHandler}>
            <label>User Name</label>
            <input type="text" name="userName" onChange={this.updateHandler} /> <br/><br/>

            <label>Email Id</label>
            <input type="text" name="email" onChange={this.updateHandler} /> <br/><br/>

            <label>Mobile No</label>
            <input type="text" name="mobile" onChange={this.updateHandler} /> <br/><br/>

            <label>password</label>
            <input type="text" name="password" onChange={this.updateHandler} /> <br /><br/>
            <input type="submit" value="Regi.." />
        
        
        
        </form>
        </div>
    )
  }
}

export default Climax