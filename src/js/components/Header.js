import React, {Component, PropTypes} from "react";
import {render} from 'react-dom';

export default class Main extends Component {
    render() {
        return (<header>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <a id="logo" href="#"><img className="img-responsive" src="assets/img/logo.png"/></a>
                    </div>
                    <div className="col-md-9">
                        <a></a>
                    </div>
                </div>
            </div>
        </header>)
    }
}
