import React from 'react';
import Search from './search';

export default class SiteHeader extends React.Component {
    render() {
        return (
            <header className="main-header">
                <div className="header-wrapper">
                    <h3>Netflix Roulette</h3>
                    {this.props.isMainPage ? (<Search searchString=""/>) : (<a href="#main">Search</a>)}
                </div>
            </header>
        );
    }
}

