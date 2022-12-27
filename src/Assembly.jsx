import React from "react";
import Display from "./Components/normal/Display";
import './Assembly.css';
import Scena from "./Components/three/Scena";

function Assembly() {

    return (
        <div className="assembly">
            {/* <Display /> */}
            <Scena />
        </div>
    );

}

export default Assembly;