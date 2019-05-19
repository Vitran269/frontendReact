import React, { Component } from 'react'
import Navigation from '../etc/Navigation.jsx'
import Footer from '../etc/Footer.jsx'
export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about" >
                    <Navigation />
                    <h1 className="about-h1">HELLO SAIGON!!</h1>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
