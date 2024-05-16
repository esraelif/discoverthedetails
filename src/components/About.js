import React from 'react';
import aboutImg from '../images/about.jpg'
import Title from './Title';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className="section" id="about">
            <Title title='about' subTitle='us' />


            <div className="section-center about-center">
                <div className="about-img">
                    <img
                        src={aboutImg}
                        className="about-photo"
                        alt="awesome beach"
                    />
                </div>
                <article className="about-info">
                    <h3>explore the difference</h3>
                    <p>
                        Embark on a journey through the enchanting landscapes of Cappadocia with our exclusive tour. Marvel at the surreal rock formations, explore ancient underground cities, and float above the fairy chimneys in a hot air balloon ride at sunrise.
                    </p>
                    <p>
                        With our knowledgeable guides, delve into the region's rich history and culture while experiencing unparalleled natural beauty. Book your Cappadocia tour today for an unforgettable adventure in the heart of Turkey.
                    </p>
                    {/* <a href="/readmore" className="btn">Read More</a> */}
                    <Link to="#about" className="btn">Read More </Link>
                </article>
            </div>
        </section>
    );
}

export default About;
