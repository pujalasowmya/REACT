import React, {Component} from 'react';
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <link to="/index" className="navbar-brand">React Contact App</link>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <link to="/contact" className="nav-link">Contact</link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
}
}
export default Navbar