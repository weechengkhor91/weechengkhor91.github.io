import React, { Component } from 'react'
//import {ContactDetails} from "../Contact/ContactComponent";

export default class Home extends Component {
    render(){
        return (
            <div>
                <section id="sec-carousel">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="cls-carousel-img">
                                <img src={require('../../assets/images/computer.png') } className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec-home-about">
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-sm-6">
                            <img src={require('../../assets/images/computer.png') } className="img-fluid"/>
                        </div>
                        <div className="col-12 col-sm-6">
                            <h3 className="cls-header3">What We Do</h3>
                           <div className="cls-wedo-wrapper margin-bottom">
                               <div className="cls-wedo-img"><img src={require('../../assets/images/icon-design.png') } className="img-fluid"/> </div>
                               <h4 class="cls-wedo-title">Web Design & Development</h4>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                           </div>
                            <div className="cls-wedo-wrapper margin-bottom">
                                <div className="cls-wedo-img"><img src={require('../../assets/images/icon-design.png')}
                                                                   className="img-fluid"/></div>
                                <h4 className="cls-wedo-title">Graphic Design</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                            </div>
                            <div className="cls-wedo-wrapper margin-bottom">
                                <div className="cls-wedo-img"><img src={require('../../assets/images/icon-design.png')}
                                                                   className="img-fluid"/></div>
                                <h4 className="cls-wedo-title">Branding</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section id="sec-home-software">
                    <div className="container">
                        <h3 className="cls-header3 cls-center text-center">What We Use</h3>
                        <div className="row ">
                            <div className="col-12 col-sm-3">
                                <div><img src={require('../../assets/images/icon-design.png') } className="img-fluid center-block"/> </div>
                                <h4 className="cls-software-title">Joomla</h4>
                            </div>
                            <div className="col-12 col-sm-3">
                                <div><img src={require('../../assets/images/icon-design.png') } className="img-fluid center-block"/> </div>
                                <h4 className="cls-software-title">Wordpress</h4>
                            </div>
                            <div className="col-12 col-sm-3">
                                <div><img src={require('../../assets/images/icon-design.png') } className="img-fluid center-block"/> </div>
                                <h4 className="cls-software-title">React</h4>
                            </div>
                            <div className="col-12 col-sm-3">
                                <div><img src={require('../../assets/images/icon-design.png') } className="img-fluid center-block"/> </div>
                                <h4 className="cls-software-title">Vue</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="sec-home-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <h3 className="cls-header3">Get In Touch</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                            </div>
                            <div className="col-12 col-sm-6">
                                <a href="contact.html" className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        )
    }
}