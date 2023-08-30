import React from "react";
import "../../App.css";
import logo from "../images/logo.png";
import appStore from "../images/appstore.png";
import playStore from "../images/playstore.png";
import phone1 from "../images/phone1.png";
import phone2 from "../images/phone2.png";

export default function Template() {
    return (
        <div class="index-body">
            <section class="boxed-up">
                <div class="shop-static">
                    <header class="header-index">
                        <div class="logo-align">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Shops</h1>
                                <p>Near Me</p>
                            </div>
                        </div>
                        <p class="shop-description">Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you.</p>
                        <div class="stores">
                            <a href="#f"><img src={appStore} alt="appstore" /><p>Coming Soon!</p></a>
                            <a href="#s"><img src={playStore} alt="playstore" /><p>Coming Soon!</p></a>
                        </div>
                    </header>
                    <div class="phone-images">
                        <img src={phone1} alt="phone" />
                        <img src={phone2} alt="phone" />
                    </div>
                </div>

            </section>
            <footer class="footer-index">
                <div class="footer-flex-index">
                    <a href="https://storesnearme.in/terms#privacy" target="_self">Privacy Policy</a>
                    <a href="https://storesnearme.in/terms" target="_self">Terms & Conditions</a>
                </div>
                <p>© Copyrights 2023 | All rights reserved</p>
            </footer>
        </div>
    )
}