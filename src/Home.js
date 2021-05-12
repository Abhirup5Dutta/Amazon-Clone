import React, { useState } from 'react'
import './Home.css'
import Product from './Product'
import Carousel from 'react-bootstrap/Carousel'

function Home() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="home">
            <div className="home__container">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item interval={5000}>
                        <img className="home__image d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon home page" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="home__image d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/hero/Milaap_Hero_pc1x._CB670835918_.jpg" alt="amazon home page" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="home__image d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/MayArt/GW/Heros/V2/Ecc_accs_Tallhero_1500x600._CB671075384_.jpg" alt="amazon home page" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="home__image d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OPPO/A74/17990_WOBO/V348719848_IN_WLD_OPPO_A74_TallHero_1500x600._CB669473435_.jpg" alt="amazon home page" />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img className="home__image d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_1500x600_4._CB669477454_.jpg" alt="amazon home page" />
                    </Carousel.Item>
                </Carousel>

                <div className="home__row">
                    {/* Product1 */}
                    <Product id='12321341' title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' price={892.0} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' rating={5} />

                    {/* Product */}
                    <Product id='49538094' title='Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)' price={4500.0} image='https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY327_FMwebp_QL65_.jpg' rating={3} />
                </div>


                <div className="home__row">
                    {/* Product */}
                    <Product id='90829332' title='Redmi Smart Band - (Direct USB Charging, Full Touch Colour Display, Upto 14-Day Battery Life, Works with Xiaomi Wear App)' price={1598.00} image='https://images-na.ssl-images-amazon.com/images/I/71RrPTCdy-L._SL1500_.jpg' rating={3} />

                    {/* Product */}
                    <Product id='23445930' title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)' price={3800.00} image='https://images-na.ssl-images-amazon.com/images/I/61MVJyOfuBL._SL1000_.jpg' rating={4} />

                    {/* Product */}
                    <Product id='3254354345' title='Apple iPad Pro (11-inch, Wi-Fi + Cellular, 1TB) - Silver (1st Generation)' price={135900.00} image='https://images-na.ssl-images-amazon.com/images/I/512SnKuHszL._SL1024_.jpg' rating={4} />

                </div>


                <div className="home__row">
                    {/* Product */}
                    <Product id='4903850' title='Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)' price={65789.00} image='https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg' rating={5} />
                </div>
            </div>
        </div>
    )
}


export default Home
