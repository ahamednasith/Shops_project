import React from "react";
import { Helmet } from "react-helmet";
// import './style.css';
import logo from "../../images/logo.webp";
import favicon from "../../images/favicon1.ico";
import apple from "../../images/apple-touch-icon1.png";
import saree from "../../images/saree.webp";
import location from "../../images/location.webp";
import man from "../../images/man-on-a-mission.webp";
import green from "../../images/green-round.webp";
import red from "../../images/red-round.webp";
import google from "../../images/google-maps.webp";
import layout from "../../images/layout.webp";
import radial from "../../images/radial-bg.webp";
import user from "../../images/user.webp";
import place from "../../images/some-place-one.webp";
import tick from "../../images/Tick.webp";
import appStore from "../../images/app-store.webp";
import playStore from "../../images/play-store.webp";
import laptop from "../../images/laptop-exchange.webp";
import arrow from "../../images/arrow-man.webp";
import puzzle from "../../images/puzzles.webp";
import screen from "../../images/mobile-screens.webp";
import upArrow from "../../images/up-arrow.webp";
import facebook from "../../images/facebook.webp";
import twitter from "../../images/twitter.webp";
import instragram from "../../images/instagram.webp";
import apple57x57 from "../../images/apple-touch-icon1-57x57.png";
import apple72x72 from "../../images/apple-touch-icon1-72x72.png";
import apple76x76 from "../../images/apple-touch-icon1-76x76.png";
import apple114x114 from "../../images/apple-touch-icon1-114x114.png";
import apple120x120 from "../../images/apple-touch-icon1-120x120.png";
import apple144x144 from "../../images/apple-touch-icon1-144x144.png";
import apple152x152 from "../../images/apple-touch-icon1-152x152.png";
import apple180x180 from "../../images/apple-touch-icon1-180x180.png";

export default function Website() {
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shops Near Me</title>
                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" />
                <meta property="og:title" content="" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:domain" value="" />
                <meta name="twitter:url" value="" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:description" content="" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:label1" value="" />
                <meta name="twitter:data1" value="" />
                <meta name="twitter:label2" value="" />
                <meta name="twitter:data2" value="" />
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                <link rel="apple-touch-icon" href={apple} />
                <link rel="apple-touch-icon" sizes="57x57" href={apple57x57} />
                <link rel="apple-touch-icon" sizes="72x72" href={apple72x72} />
                <link rel="apple-touch-icon" sizes="76x76" href={apple76x76} />
                <link rel="apple-touch-icon" sizes="114x114" href={apple114x114} />
                <link rel="apple-touch-icon" sizes="120x120" href={apple120x120} />
                <link rel="apple-touch-icon" sizes="144x144" href={apple144x144} />
                <link rel="apple-touch-icon" sizes="152x152" href={apple152x152} />
                <link rel="apple-touch-icon" sizes="180x180" href={apple180x180} />
                <meta name="theme-color" content="#000" />
                <link rel="stylesheet" href="style.css" />
            </Helmet>
            <div>
                <header>
                    <a href="#s"><img src={logo} alt="logo" draggable="false" /></a>
                    <div class="burger-navbar">
                        <div class="bar">
                            <span class="bar-1"></span>
                            <span class="bar-2"></span>
                            <span class="bar-3"></span>
                        </div>
                    </div>
                    <div class="ham-burger">
                        <li><a href="#s">Home</a></li>
                        <li><a href="#s">Grab your deals</a></li>
                        <li><a href="#s">Business Growth</a></li>
                        <li><a href="#s" class="flex justify-content-center align-items-center">Sign Up</a></li>
                    </div>
                </header>
                <section class="boxed-up first-section flex justify-content-center align-items-center" id="first-section">
                    <div class="flex justify-content-flex-start align-items-center tag-one">
                        <div class="producting">
                            <img src={saree} alt="Product" draggable="false" />
                        </div>
                        <div class="contenting">
                            <div class="flex justify-content-flex-start align-items-center locate">
                                <img src={location} alt="Location" draggable="false" />
                                <p>Sowcarpet</p>
                            </div>
                            <p class="pro-name">Kanjivaram Saree</p>
                            <p class="cost"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-content-flex-start align-items-center tag-two">
                        <div class="producting">
                            <img src={saree} alt="Product" draggable="false" />
                        </div>
                        <div class="contenting">
                            <div class="flex justify-content-flex-start align-items-center locate">
                                <img src={location} alt="Location" draggable="false" />
                                <p>Sowcarpet</p>
                            </div>
                            <p class="pro-name">Kanjivaram Saree</p>
                            <p class="cost"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-content-flex-start align-items-center tag-three">
                        <div class="producting">
                            <img src={saree} alt="Product" draggable="false" />
                        </div>
                        <div class="contenting">
                            <div class="flex justify-content-flex-start align-items-center locate">
                                <img src={location} alt="Location" draggable="false" />
                                <p>Sowcarpet</p>
                            </div>
                            <p class="pro-name">Kanjivaram Saree</p>
                            <p class="cost"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <div class="flex justify-content-flex-start align-items-center tag-four">
                        <div class="producting">
                            <img src={saree} alt="Product" draggable="false" />
                        </div>
                        <div class="contenting">
                            <div class="flex justify-content-flex-start align-items-center locate">
                                <img src={location} alt="Location" draggable="false" />
                                <p>Sowcarpet</p>
                            </div>
                            <p class="pro-name">Kanjivaram Saree</p>
                            <p class="cost"><span>₹</span><span>900</span>800</p>
                        </div>
                    </div>
                    <img src={man} alt="Man holding the phone excited" class="main-man" draggable="false" />
                    <img src={green} alt="Green Round" draggable="false" class="green-round" />
                    <img src={red} alt="Red Round" draggable="false" class="red-round" />
                    <span class="gradientino"></span>
                    <span class="gradientino-and"></span>
                    <span class="gradientino-another"></span>
                    <span class="darken"></span>
                </section>
                <section class="section-two boxed-up">
                    <h1>Get The Most Attractive <span class="justify-content-center align-items-center">Deal</span> from shops near me</h1>
                    <p>Buy products at never before price</p>
                </section>
                <section class="section-three boxed-up">
                    <div class="maps-control">
                        <img src={google} alt="Google Maps" draggable="false" class="mappu" />
                        <img src={layout} alt="Layout" draggable="false" class="layout" />
                        <img src={radial} alt="Radial BG" draggable="false" class="radioactive" />
                        <div class="pulse-one flex justify-content-center align-items-center">
                            <img src={user} alt="user" draggable="false" />
                        </div>
                        <div class="pulse-two flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-three flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-two">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-four flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-three">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-five flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-four">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-six flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-five">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pulse-seven flex justify-content-center align-items-center">
                            <img src={place} alt="Some Place" draggable="false" />
                            <div class="video-display-six">
                                <div class="video-controller">
                                    <video src="chumma-video.mp4" muted autoplay loop></video>
                                </div>
                                <div class="flex justify-content-center align-items-center the-whole-product">
                                    <div>
                                        <img src={user} alt="Product" draggable="false" />
                                    </div>
                                    <div class="product-information">
                                        <p>Curate.in <span><img src={tick} alt="Verified" draggable="false" /></span></p>
                                        <p>Shopping</p>
                                        <p>₹<span>499</span>300</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="stores-before-text">
                        <p>Enjoy personalized, location-based shopping with exclusive offers and discounts just for you.</p>
                        <div class="flex justify-content-center align-items-center boxed-up stores">
                            <a href="#a"><img src={appStore} alt="App Store" draggable="false" /></a>
                            <a href="#a"><img src={playStore} alt="Play Store" draggable="false" /></a>
                        </div>
                    </div>
                </section>
                <section class="section-four boxed-up">
                    <h2>Grow your business with <span>Shop Near Me</span></h2>
                    <div class="flex justify-content-center align-items-center whole-fill">
                        <div class="lappart">
                            <img src={laptop} alt="Handshakes from Laptop" draggable="false" />
                        </div>
                        <div class="lap-content">
                            <p>Unleash the Power of Innovation and Collaboration</p>
                            <p>Let us assist you in unlocking your business’s full potential.</p>
                            <a href="#a" class="flex justify-content-center align-items-center">Sign Up</a>
                        </div>
                    </div>
                    <div class="flex justify-content-center align-items-center dual-role">
                        <div class="thunder-man flex justify-content-center align-items-center flex-direction-column">
                            <div class="one-sided">
                                <img src={arrow} alt="Arrow Man" draggable="false" />
                            </div>
                            <div class="double-sided">
                                <p>Grow your business with Shops</p>
                                <p>Partner with us for exponential growth and success.</p>
                                <a href="#a" class="flex justify-content-center align-items-center">Sign Up</a>
                            </div>
                        </div>
                        <div class="puzzle-side flex justify-content-center align-items-center flex-direction-column">
                            <div class="one-sided">
                                <img src={puzzle} alt="Puzzle Hands" draggable="false" />
                            </div>
                            <div class="double-sided">
                                <p>Together, we can shape the future of your business</p>
                                <p>Let's work together towards  thedirection of your business.</p>
                                <a href="#a" class="flex justify-content-center align-items-center">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-five">
                    <div class="section-five-logo">
                        <img src={logo} alt="Logo" draggable="false" />
                    </div>
                    <div class="mobile-screens">
                        <img src={screen} alt="Mobile Screens" draggable="false" />
                        <span class="linear-black-color"></span>
                    </div>
                </section>
                <footer>
        <span class="footer-top-gradient"></span>
        <div class="boxed-up content-footer">
            <div class="footer-logo">
                <a href="#a" class="logoin-it"><img src={logo} alt="Footer Logo" draggable="false" /></a>
            </div>
            <p class="know-em">Get the best deals. Find the best Deals for the product you Love.</p>
            <div class="flex justify-content-center align-items-center boxed-up footer-stores">
                <a href="#a"><img src={appStore} alt="App Store" draggable="false" /></a>
                <a href="#a"><img src={playStore} alt="Play Store" draggable="false" /></a>
            </div>
            <a href="#first-section" class="up-arrow flex justify-content-center align-items-center"><img src={upArrow} alt="Up Arrow" draggable="false" /></a>
        </div>
        <div class="flex justify-content-space-between align-items-center boxed-up copyDopy">
            <p class="Copyright">© Copyright <script>document.write(new Date().getFullYear())</script> All Rights Reserved by Pepul tech private  limited</p>
            <div class="flex justify-content-center align-items-center social-media">
                <a href="#a" class="flex justify-content-center align-items-center"><img src={twitter} alt="Twitter" draggable="false" /></a>
                <a href="#a" class="flex justify-content-center align-items-center"><img src={facebook} alt="Facebook" draggable="false" /></a>
                <a href="#a" class="flex justify-content-center align-items-center"><img src={instragram} alt="Instagram" draggable="false" /></a>
            </div>
        </div>
        <span class="footer-bottom-gradient"></span>
    </footer>
            </div>
        </div>

    )
}