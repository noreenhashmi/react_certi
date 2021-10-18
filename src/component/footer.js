import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    render() {
        return (
            <>
                <footer>

                    <div>
                        <h3>ONLINE STORE</h3>
                        <a href="#">MEN CLOTHING</a>
                        <a href="#">WOMEN CLOTHING</a>
                        <a href="#">MEN ACCESSORIES</a>
                        <a href="#">WOMEN ACCESSORIES</a>
                    </div>
                    <div>
                        <h3>HELPFUL LINKS</h3>
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">CONTACT</a>
                    </div>
                    <div>
            <h3>PARTNERS</h3>
            <a href="#">ZARA</a>
            <a href="#">PANTALOONS</a>
            <a href="#">LEVIS</a>
            <a href="#">UCB</a>
            <a href="#">+ MANY MORE</a>
        </div>
        <div>

            <h3>ADDRESS</h3>
            <a href="#">BULIDING 101</a>
            <a href="#">CENTRAL AVENUE</a>
            <a href="#">LA - 902722</a>
            <a href="#">UNITED STARES</a>
        </div>
        <img src="https://i.imgur.com/OKAY6Fl.png" alt=""/>
                </footer>
            </>

        );
    }
}

export default Footer;