import React, {Component, PropTypes} from "react";
import {render} from 'react-dom';

export default class Main extends Component {
    render() {
        return (<header>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <a id="logo" href="#"><img class="img-responsive" src="../img/logo.png"/></a>
                    </div>
                    <div class="col-md-9">
                        <a></a>
                    </div>
                </div>
            </div>
        </header>)
    }
}