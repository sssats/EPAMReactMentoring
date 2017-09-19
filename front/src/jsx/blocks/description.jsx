import React from 'react';

export default class Description extends React.Component {
    render() {
        return (
            <section className="description-container content-container">
                <div className="content-wrapper">
                    <div className="img-wrapper">
                        <img
                            src="http://kosmos.prim.land/wp-content/uploads/2014/11/xobbit-bitva-pyati-voinstv_afisha_1.jpg"
                            alt=""/>
                    </div>
                    <article className="description-wrapper">
                        <header>
                            <h3>Movie title</h3><span className="rating">5.0</span>
                            <p className="category">Movie category</p>
                            <p className="meta">
                                <span className="year">1994</span>
                                <span className="length">154 min</span>
                            </p>
                        </header>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur delectus
                            facilis iure maxime quasi sed? Amet architecto blanditiis, earum eos eum fugiat
                            incidunt, nesciunt nihil nostrum soluta velit voluptas.
                        </p>
                        <footer>
                            <p className="director">Director: film director</p>
                            <p className="casts">Casts: Taron Egerton, Colin Firth, Mark Strong</p>
                        </footer>
                    </article>
                </div>
            </section>
        );
    }
}