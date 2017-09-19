import React from 'react';
import Radio from './elements/radio'

import MovieItem from './elements/movieItem';

export default class Movies extends React.Component {
    render() {
        return (
            <section className="movies">
                <div className="movies-wrapper">
                    <header>
                        <span>7 movies found</span>
                        <div>
                            <span>Sort by</span>
                            <Radio title="release date" name="filterBy" value="1"/>
                            <Radio title="rating" name="filterBy" value="2"/>
                        </div>
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
        );
    }
}