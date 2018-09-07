import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.PNG'
export default class Footer extends Component {
    render(){
        return(
            <div>
                <section id="sec-bottom">
                    <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-3">
                            <img src={logo} className="img-fluid"/>
                        </div>
                        <div className="col-12 col-sm-3">
                            <h4 className="cls-header4">Quick Link</h4>
                            <ul className="cls-bottom-menu-list">
                                <li><Link to="/about">About</Link></li>
                                <li><a href="/portfolio">Portfolio</a></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-3">
                            <h4 className="cls-header4">Address</h4>
                            <div className="cls-address">
                                TripleOne Somerset<br/>
                                111 Somerset Rd<br/>
                                Singapore 238164<br/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-3">
                            <h4 className="cls-header4">Contact Info</h4>
                            <ul className="cls-contact-info-list">
                                <li><a href="mailto:support798@gmail.com"><i className="far fa-envelope"></i> support798@gmail.com </a></li>
                                <li><a href="tel:+6512345678"><i className="fas fa-phone"></i> +65 1234 5678</a></li>
                                <li><a href="tel:+6512345678"><i className="fab fa-whatsapp"></i> +65 1234 5678</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}