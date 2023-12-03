import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <section className="footer" id="footer">

<div className="box-container">

    <div className="box">
        <h3>Машин оруулж ирж байгаа улс</h3>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> Germany </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> japan </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> france </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> russia </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> USA </Link>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <a href="#"> <i className="fas fa-arrow-right"></i> Эхлэл </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Машин </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Үйлчилгээ </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> онцох машин </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> тойм </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> Холбогдох </a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone"></i> +976 99999999 </a>
        <a href="#"> <i className="fas fa-phone"></i> +976 88888888 </a>
        <a href="#"> <i className="fas fa-envelope"></i> gvndee@autohunt.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt"></i> Darkhan, Mongolia </a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
    </div>

</div>

<div className="credit shadow"> created by webbd</div>

</section>
        </div>
    );
};

export default Footer;