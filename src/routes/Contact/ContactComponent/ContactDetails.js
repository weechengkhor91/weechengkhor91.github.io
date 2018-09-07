import React, {Component} from 'react'

import {contactDetails} from "../../../data/data";

export default class ContactDetails extends Component {
    render() {
        return (
            <div>
                <section id="sec-contact">
                <div className="container">
                    <h3 className="cls-contact-title">Contact Info</h3>
                    <div>
                    { contactDetails.map((item, i) => (
                        <div className="cls-contact-wrapper" key={i}>
                            <div className="cls-contact-icon">
                                <i className= {`fa ${item.classIcon}`} ></i>
                            </div>
                            <div className="cls-contact-content">
                                <h6 className="cls-header3"> {item.title}</h6>
                                <div>{item.content}</div>
                            </div>
                        </div>

                    ))}

                    </div>


                </div>
                {/*end container*/}
                </section>
            </div>
        )
    }
}