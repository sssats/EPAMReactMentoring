import React from 'react';

export default class Radio extends React.Component {
    render() {
        return (
            <label>
                {this.props.title}
                <input type="radio" name={this.props.name} value={this.props.value}/>
            </label>
        );
    }
}

