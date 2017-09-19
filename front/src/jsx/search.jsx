import React from 'react';
import Radio from './elements/radio';

export default class Search extends React.Component {
    render() {
        return (
            <section className="search-container">
                <h4>find your movie</h4>
                <input className="search-field" type="text" placeholder="Quentin Tarantino"/>
                <div className="search-settings">
                    <span>search by</span>
                    <Radio title="title" name="searchBy" value="1"/>
                    <Radio title="director" name="searchBy" value="2"/>
                    <button className="search-button" type="button">search</button>
                </div>
            </section>
        );
    }
}