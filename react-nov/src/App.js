import React, {Component} from 'react';
import ContactApp from './Contacts/ContactApp'
import Navbar from './Navbar/Navbar'
//import {BrowserRouter as Router, Router, Routes} from 'react-router-dom'
class App extends Component{
    render(){
    return (
         <div>
            <Navbar />
            <ContactApp/>
          

        </div>
        )
    }
}
export default App