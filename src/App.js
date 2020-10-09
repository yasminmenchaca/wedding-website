import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Registry from './components/Registry';
import Schedule from './components/Schedule';
import FAQs from "./components/FAQs";
import RSVP from "./components/RSVP";
import Error from './components/Error';
import Watch from "./components/Watch";
import NavBar from './components/NavBar';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/schedule" component={Schedule}/>
                        <Route exact path="/registry" component={Registry}/>
                        <Route exact path="/faqs" component={FAQs}/>
                        <Route exact path="/rsvp" component={RSVP}/>
                        <Route exact path="/watch" component={Watch}/>
                        <Route exact component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;