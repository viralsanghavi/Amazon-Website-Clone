import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* produvt id,title,price,rating,image */}
            <div className="home_row">

                <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />
                <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />

            </div>
            <div className="home_row">
                <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />

                <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />

                <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />

            </div>
            <div className="home_row">
            <Product
                    id='1231'
                    title='sad'
                    price={11.95}
                    rating={4}
                    image={''}
                />
            
            </div>
            {/* produvt id,title,price,rating,image */}

        </div>
    )
}

export default Home
