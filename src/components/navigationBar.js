import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Create from "./create.hero";

class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Router>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link to={'./'} className="navbar-brand"> Marvel Universe </Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'./Home'} className="nav-link">Home</Link>
                                </li>
                                <li>
                                    <Link to={'./Create'} className="nav-link ">New Hero</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Switch>
                        <Route exact path='/create' component={Create}/>
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default NavigationBar;