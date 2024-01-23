import React from "react";
import './FooterComponent.scss'
import 'boxicons'
function FooterComponent() {
    return (
        <footer>
            <div className="footer-contact-container">
                <p>Follow Us</p>
                <p>Don’t miss promotions, follow us for the latest news</p>
                <a href='https://www.tiktok.com/@shb.dtus'><box-icon type='logo' name='tiktok'></box-icon></a>
                <a href='https://www.facebook.com/hcy.shb'><box-icon type='logo' name='facebook'></box-icon></a>
                <a href='https://www.instagram.com/shb.agt11/'><box-icon type='logo' name='instagram'></box-icon></a>
            </div>
            <div className="footer-email-container">
                <p>We don’t keep our beauty secrets</p>
                <p>Subscribe now and thank us later</p>
                <input type="text" id="email" name="email" />
                <button>Submit</button>
            </div>
            <p>Design and deploy by Duy Tran 2023</p>
        </footer>
    )
}

export default FooterComponent;