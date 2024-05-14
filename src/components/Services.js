import React from 'react';
import Title from './Title';

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title='Our' subTitle='Services' />

            <div className="section-center services-center">
                <article className="service">
                    <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
                    <div className="service-info">
                        <h4 className="service-title">saving money</h4>
                        <p className="service-text">

                            Explore the world affordably with our tour company, where we offer budget-friendly packages without compromising on quality or experiences.
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
                    <div className="service-info">
                        <h4 className="service-title">endless hiking</h4>
                        <p className="service-text">
                            Embark on endless hiking adventures with our diverse range of trails and destinations, catering to all levels of experience and preferences.
                        </p>
                    </div>
                </article>

                <article className="service">
                    <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
                    <div className="service-info">
                        <h4 className="service-title">amazing comfort</h4>
                        <p className="service-text">
                            Indulge in amazing comfort as you journey through breathtaking landscapes and cultural wonders with our luxurious tour accommodations and personalized service.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Services;
