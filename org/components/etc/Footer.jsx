import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <section id="footer">
                    <div class="container">
                        <div class="row text-center text-xs-center text-sm-left text-md-left">
                            <div class="col-xs-12 col-sm-10 col-md-10">
                                <h5>ABOUT THIS WEBSITE</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><a href="http://localhost:8080/home"><i class="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="http://localhost:8080/userestates"><i class="fa fa-angle-double-right"></i>Estates</a></li>
                                    <li><a href="http://localhost:8080/userprojects"><i class="fa fa-angle-double-right"></i>Projects</a></li>
                                    <li><a href="http://localhost:8080/about"><i class="fa fa-angle-double-right"></i>About</a></li>
                                    
                                </ul>
                            </div>
                            <div class="col-xs-12 col-sm-2 col-md-2">
                                <h5>CONTACT US</h5>
                                <ul class="list-unstyled quick-links">
                                    <li><a>ASSIGNMENT 3</a></li>
                                    <li>Tran Ngoc Khanh Vi - s3697290</li>
                                    <li>Truong Phu Cuong - s3713026</li>

                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul class="list-unstyled list-inline social text-center">
                                    <li class="list-inline-item"><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href="https://twitter.com/"><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a></li>
                                   
                                    <li class="list-inline-item"><a href="https://mail.google.com/mail/u/1/#inbox" target="_blank"><i class="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <hr />
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p><u><a ></a></u> </p>
                                <p class="h6"><a class="text-green ml-2" target="_blank"></a></p>
                            </div>
                            <hr />
                        </div>
                    
                    </div>
                </section>

            </div>
        )
    }
}
