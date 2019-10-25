import React, { Component } from 'react';
import { Button, ToggleButton, ToggleButtonGroup, ButtonToolbar } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { Redirect } from "react-router-bootstrap";
import Routes from "../Routes";
import 'bulma';
import Addresses from './data/Addresses.js'
export class ChargerList extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchString : "",
            users: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
          users: Addresses
        });
        this.refs.search.focus();
    }
    
    handleChange() {
        this.setState({
          searchString: this.refs.search.value
        });
    }
    render() {
        let _users = this.state.users;
        let search = this.state.searchString.trim().toLowerCase();
        if (search.length > 0) {
            _users = _users.filter(function(user) {
        return user.toLowerCase().match(search);
        });
    }
        return(
            <div>
            <div>
            <input
                type="text"
                value={this.state.searchString}
                ref="search"
                onChange={this.handleChange}
                placeholder="type location here"
            />
            <ul>
                {_users.map(l => {
                return (
                    <li>{l}</li>
                );
                })}
            </ul>
            </div>
        </div>
        )
    }
}
export default ChargerList;
