import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer id="footer">
            <div class="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS Mobile Phone</p>
                <img src={playStore} alt="Playstore" />
                <img src={appStore} alt="Appstore" />
            </div>

            <div class="midFooter">
                <h1>Ecommerce</h1>
                <p>High Quality Is Our First Priority</p>
                <p>Copyright 2021 &copy; JayRank</p>
            </div>

            <div class="rightFooter">
                <h4>Follow Us</h4>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">LinkedIn</a>
            </div>
        </footer>
    );
}
export default Footer;