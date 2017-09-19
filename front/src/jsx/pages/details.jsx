import React from 'react';

import Description from '../blocks/description'
import SiteHeader from '../header'
import MovieItem from '../elements/movieItem';
import SiteFooter from '../footer';


export default class DetailsPage extends React.Component {
    render() {
        return (
            <main>
                <SiteHeader/>
                <Description/>
                <section className="related-cinemas content-container">
                    <div className="content-wrapper">
                        <header>
                            <p>Films by Quentin Tarantino</p>
                        </header>
                        <section className="movies-container">
                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTBlOWZhZTctOTY0MC00Y2QyLTljMmYtZDkxZDFlMWU4Y2EyXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE"
                                year="1999"
                                genre="Science"/>
                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNjIxNzM5Nl5BMl5BanBnXkFtZTgwMzg5NzY2MjI@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE1"
                                year="1994"
                                genre="Drama"/>
                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BOWM5MWJhMmMtZTQ4YS00MTUwLWI5MjEtYTk4ZDIwMmRiNjUxXkEyXkFqcGdeQXVyMjIzNzQ1MjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE2"
                                year="1993"
                                genre="Drama"/>

                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BNTBlOWZhZTctOTY0MC00Y2QyLTljMmYtZDkxZDFlMWU4Y2EyXkEyXkFqcGdeQXVyNDg2MjUxNjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE"
                                year="1999"
                                genre="Science"/>
                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxNjIxNzM5Nl5BMl5BanBnXkFtZTgwMzg5NzY2MjI@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE1"
                                year="1994"
                                genre="Drama"/>
                            <MovieItem
                                src="https://images-na.ssl-images-amazon.com/images/M/MV5BOWM5MWJhMmMtZTQ4YS00MTUwLWI5MjEtYTk4ZDIwMmRiNjUxXkEyXkFqcGdeQXVyMjIzNzQ1MjM@._V1_UY209_CR0,0,140,209_AL_.jpg"
                                title="TITLE2"
                                year="1993"
                                genre="Drama"/>
                        </section>
                    </div>
                </section>
                <SiteFooter/>
            </main>
        );
    }
}

