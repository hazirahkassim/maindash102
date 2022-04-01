import React from "react";
import "../style/top.css";


const Topnavi = () => {
    return(
        <>
        <div>
        <div className="top_container">
        <div className="topnav">
            <div>
                <ul>
                <li><img src={require('../image/Group 12.png')} /></li>
                <li>Business Account<br/> RM 100,000.00</li>
                <li><img src={require('../image/shape.png')} /></li>
                <li><img src={require('../image/Fill 3.png')} /></li>
            </ul>
            </div>
        </div>
        </div>
        </div>
        </>

    );
};
export default Topnavi;