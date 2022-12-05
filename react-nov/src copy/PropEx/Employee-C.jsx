import React, {Component} from 'react'
class Employee extends Component {
    render() {
        return (
            <div>
                <h1>Employee Component></h1>
                <prev>{JSON.stringify(this.props)}</prev>
                <h2>Employee Name:{this.props.user.user_Name}</h2>
                <h3>Employee Salary:{this.props.user.sal}</h3>
            </div>
        )
    }
}
export default Employee