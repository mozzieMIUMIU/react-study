
import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Index from "../views/index/index.jsx";
import Details from "../views/details/details";
import User from "../views/user/user";
import About from "../views/about/about";
import Book from "../views/book/book";

export default class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
                <Route path="/index" component={Index}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/user/:id" component={User}/>
                <Route path="/book" component={Book}/>
                <Route path="/about" component={About}/>
            </Switch>
        );
    }
}