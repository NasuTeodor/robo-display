import React from "react";
import Logo_thobor from './Images/logo_thobor.png';
import Logo_altu from './Images/cane.jpg';
import './Styles/Display.css';

function Display() {

    return (
        <div className="display">
            <div className="top">
                <img className="logo" alt="" src={Logo_thobor} />
                <div className="title">
                    Arborele Thobor
                </div>
            </div>
            <div className="middle">
                <div className="title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                </div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </div>
            </div>
            <div className="bottom">
                <img className="icon" alt="" src={Logo_altu} />
                <div className="right">
                    Lorem ipsum dolor sit amet
                </div>
            </div>
        </div>
    );

}

export default Display;