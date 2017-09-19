import React from 'react';

export default class MovieItem extends React.Component {
    render() {
        return (
            <article>
                <img src={this.props.src} alt={this.props.title}/>
                <div>
                    <h3>{this.props.title}</h3>
                    <span>{this.props.year}</span>
                    <p>{this.props.genre}</p>
                </div>
            </article>
        );
    }
}