import React from "react";
import "../../App.css";

export default function Template() {
    return (
        <div class="index-body">
            <section class="boxed-up">
                <div class="shop-static">
                    <header class="header-index">
                        <div class="logo-align">
                            <img alt="logo" />
                            <div>
                                <h1>Shops</h1>
                                <p>Near Me</p>
                            </div>
                        </div>
                        <p class="shop-description">Shop Near is a cutting-edge mobile application designed to enhance your shopping experience by providing a comprehensive and convenient way to discover and locate nearby stores, boutiques, and shopping centers. Whether you're searching for the latest fashion trends, electronics, home decor, or any other type of retail therapy, Shop Near is here to guide you.</p>
                        <div class="stores">
                            <a href="#f"><img src="/Users/ahamednasith/Documents/Shops_project/frontend/images/appstore.png" alt="appstore" /><p>Coming Soon!</p></a>
                            <a href="#s"><img src="/Users/ahamednasith/Documents/Shops_project/frontend/images/playstore.png" alt="playstore" /><p>Coming Soon!</p></a>
                        </div>
                    </header>
                    <div class="phone-images">
                        <img src="/Users/ahamednasith/Documents/Shops_project/frontend/images/phone1.png" alt="phone" />
                        <img src="/Users/ahamednasith/Documents/Shops_project/frontend/images/phone2.png" alt="phone" />
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