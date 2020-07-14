import React from 'react'
import './Home.css'
import Product from './Product'
import { random,commerce, image } from 'faker/locale/en_IND'

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                {/* produvt id,title,price,rating,image */}
                <div className="home__row">
                    <Product
                        rating={4}
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                    />
                    <Product
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                        rating={4}
                    />

                    <Product
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                        rating={4}
                    />

                    <Product
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                        rating={4}
                    />

                </div>
                <div className="home__row">
                    <Product
                        id={random.uuid}
                        title={commerce.productName()}
                        price={commerce.price()}
                        image={random.image()}
                        rating={4}
                    />

                </div>
                {/* produvt id,title,price,rating,image */}
            </div>

        </div>
    )
}

export default Home
