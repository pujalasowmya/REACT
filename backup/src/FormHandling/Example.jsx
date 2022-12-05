import React, { Component } from 'react'

class Login extends Component {
    state = {
        emial: "",
        password: ""
    }
    emialHandler = (event) => {
        console.log(event.target.value)
        this.setState({email:event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password:event.target.value})

    }
  render() {
    return (
      <div className="container mt-5">
        <prev>{JSON.stringify(this.state)}</prev>
        <div className="row">
            <div className="col-md-6">
                <form action="">
                <label htmlFor="">Email Id</label>
                <input type="email" onChange={this.emailHandler} /> <br/><br/>
                <label htmlFor="">password</label>
                <input type="password" onChange={this.passwordHandler} /> <br/><br />
                <input type="submit" value="login"/>

                </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Login