import React, { useState } from "react";
import './Home.scss'
import avt_01 from '../../img/avt_01.jpg'
import product_3 from '../../img/product_3.png'
import product_1 from '../../img/product_1.jpg'
import 'boxicons'
import Service_01 from '../../img/Service_01.svg'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from '../../../node_modules/react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import '../../../node_modules/react-awesome-slider/dist/styles.css';
import heartpump from '../../img/heartpump.png'
import HomeNavComponent from "../HomeNav/HomeNavComponent";
import FooterComponent from "../Footer/FooterComponent";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { listProductSelector } from "../../redux/selector";

function Home() {
    const [isclick, setIsClick] = useState('')
    const listProduct = useSelector(listProductSelector)
    const handleClickPopUp = () => {
        if (isclick === 'booking-popup is-invisible')
            setIsClick('booking-popup ')
        else
            setIsClick('booking-popup is-invisible')

    }

    const listProductlimit = (data) => {
        const content = []
        if (data.length > 6) {
            for (let i = 0; i < 6; i++) {
                content.push(
                    <div key={i} className="homeshop-child">
                        <a href="#">
                            <div className="img-hover">
                                <img src={`${process.env.REACT_APP_API_KEY}/static/images/${data[i].productImages}`}></img>
                            </div>
                            <h3>{data[i].productname}</h3>
                            <p>{data[i].price.toLocaleString()}VND</p>
                        </a>
                    </div>
                )
            }
        }
        else {
            for (let i = 0; i < data.length; i++) {
                content.push(
                    <div key={i} className="homeshop-child">
                        <a href="#">
                            <div className="img-hover">
                                <img src={product_1} />
                            </div>
                            <h3>{data[i].productname}</h3>
                            <p>{data[i].price}Đ</p>
                        </a>
                    </div>
                )
            }
        }

        return content
    }
    return (

        <>
            <HomeNavComponent
                isclick={isclick}
                handleClickPopUp={handleClickPopUp}
            />
            <div>
                <div className="home-container">
                    <div className="service-conainer">
                        <div className="service-title">
                            <h1>
                                Service Menu
                            </h1>
                        </div>
                        <div className="service-content">
                            <div className="service-child">
                                <img src={product_3} />
                                <span>NAIL CARE</span>
                            </div>
                            <div className="service-child">
                                <img src={Service_01} />
                                <span>NAIL CARE</span>
                            </div>
                            <div className="service-child">
                                <img src={Service_01} />
                                <span>NAIL CARE</span>
                            </div>
                            <div className="service-child">
                                <img src={Service_01} />
                                <span>NAIL CARE</span>
                            </div>
                            <div className="service-child">
                                <img src={Service_01} />
                                <span>NAIL CARE</span>
                            </div>
                        </div>
                        <div className="service-info">
                            <p>We specialize in providing clients with professional nail treatments using only the finest brands and high-quality products. Our manicures, pedicures, gel polishes, and nail enhancements are all performed by our highly trained nail technicians, each dedicated to ensuring you get a premium experience every time. With over 300 colors available and special attention paid to your skin and cuticles, our treatments will leave your nails looking fantastic.</p>
                        </div>
                        <div className="service-button">
                            <button><Link to="/service" >Service Menu</Link></button>
                        </div>
                    </div>
                    <div className="about-container">
                        <div className="about-image">
                            <img src={avt_01} />
                        </div>
                        <div className="about-content">
                            <div className="about-title">
                                <h1>Hi,I'm</h1>
                            </div>
                            <div className="about-content-child">
                                <p>We are determined to deliver the best possible beauty treatments and customer service to all our clients. Our family-oriented salon is located in the city center, and provides a calm, serene setting that allows you to escape from the busy hustle and bustle of life.
                                    We pride ourselves on delivering our premium services at affordable prices. Our highly skilled team is dedicated to going the extra mile to ensure your complete satisfaction.</p>
                            </div>
                            <div className="about-button">
                                <Link to="/about" >Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="slider-carousel-container">
                        <div className="slider">
                            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                                <div data-src={product_1} />
                                <div data-src={product_1} />
                            </AwesomeSlider>

                        </div>
                    </div>
                    <div className="nailbox-container">
                        <div className="nailbox-carousel">
                            <AwesomeSlider cssModule={AwesomeSliderStyles}>
                                <div data-src={product_1} />
                                <div data-src={product_1} />
                            </AwesomeSlider>
                        </div>
                        <div className="nailbox-content">
                            <div className="nailbox-title">
                                <h1>Hi,I'm</h1>
                            </div>
                            <div className="nailbox-content-child">
                                <p>We are determined to deliver the best possible beauty treatments and customer service to all our clients. Our family-oriented salon is located in the city center, and provides a calm, serene setting that allows you to escape from the busy hustle and bustle of life.
                                    We pride ourselves on delivering our premium services at affordable prices. Our highly skilled team is dedicated to going the extra mile to ensure your complete satisfaction.</p>
                            </div>
                            <div className="nailbox-button">
                                <Link to="/shop" >Shop Now</Link>
                                <img src={heartpump} />
                            </div>
                        </div>

                    </div>
                    <div className="homeshop-container">
                        <div className="homeshop-title">
                            <h1>Shop</h1>
                        </div>
                        <div className="homeshop-content">
                            {listProductlimit(listProduct)}
                        </div>
                        <div className="homeshop-button">
                            <button><Link to="/shop" >Shop Now</Link></button>
                        </div>
                    </div>
                </div>

            </div>
            <FooterComponent />
        </>
    )

}

export default Home;