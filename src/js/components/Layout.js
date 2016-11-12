import React, { Component, PropTypes } from "react";
import Header from './Header';
import Footer from './Footer';

export default function(props) {

    return (
        <div>
            <Header/>
            <div className="container">{props.children}</div>
            <Footer/>
        </div>
    )

}


