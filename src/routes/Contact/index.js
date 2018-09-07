import React, {Component} from 'react'


import {ContactDetails} from './ContactComponent'

export default class Contact extends Component {

    render() {

        return (
            <div>
                <section id="sec-banner">
                    <div className="container">
                    <h3 className="cls-header3"> Contact Us</h3>
                    </div>
                </section>
                <ContactDetails/>
            </div>
        )
    }
}