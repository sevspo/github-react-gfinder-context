import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired, 
        setAlert: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter search term', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({
                text: ''
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users..."
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {this.props.showClear && (
                    <button onClick={this.props.clearUsers} className="btn btn-light btn-block">Clear</button>
                )}
            </div>
        )
    }
}
