import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box about-widget">
                                <h2 className="widget-title">About us</h2>
                                <p>
                                    Embark on a literary journey with us! At our online library, we
                                    are dedicated to bringing the magic of books to your
                                    fingertips. Explore our carefully curated selection, where
                                    every page invites you into a world of imagination and
                                    knowledge. Join us in celebrating the joy of reading!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box get-in-touch">
                                <h2 className="widget-title">Get in Touch</h2>
                                <ul>
                                    <li>Lagjja Kalabria, 10000 Prishtinë, Kosovë.</li>
                                    <li>support@cozyreads.com</li>
                                    <li>+383 44 555 444</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box pages">
                                <h2 className="widget-title">Pages</h2>
                                <ul>
                                    <li>
                                        <Link to="/index">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/shop">Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-box subscribe">
                                <h2 className="widget-title">Subscribe</h2>
                                <p>Subscribe to our mailing list to get the latest updates.</p>
                                <form action="index.html">
                                    <input type="email" placeholder="Email" />
                                    <button type="submit">
                                        <i className="fas fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p>Copyrights &copy; 2024 - All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right col-md-12">
                            <div className="social-icons">
                                <ul>
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;