import React from 'react';

import SiteHeader from '../header';
import Movies from '../movies';
import SiteFooter from '../footer';


export default class MainComponent extends React.Component {
    render() {
        return (
            <main>
                <SiteHeader isMainPage={true}/>
                <Movies/>
                <SiteFooter/>
            </main>
        );
    }
}

