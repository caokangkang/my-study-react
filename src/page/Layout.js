import React, { Component } from 'react';
import TopBar from "../components/TopBar";
import BottomBr from "../components/BottomBar";


export default class Layout extends Component {
    render() {
        const {children, showTopBar, showBottomBar} = this.props
        console.log("children", children);
        return (
            <div>
                {showTopBar && <TopBar />}
                {this.props.children}
                {showBottomBar && <BottomBr />}
            </div>
        );
    }
}