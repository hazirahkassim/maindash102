import React from "react";
import "../style/mdside.css";

const MDside = () => {
    return (
        <>
        <div> 
    <div className="sidebar">
        <div className="image_side">
            <img src={require('../image/M2U-Biz-Logo_Yellow.png')} />
        </div>
        
          <ul className="nav_list">
            <li> Canvas Valley </li>
            <li> Approvals </li>
            <li> Bill Payment </li>
            <li> Transfer </li>
            <li> Scheduled Transactions </li>
            <li> Bulk Payment </li>
            <li> Request Payment </li>
            <li> View Statements </li>
            <li> Business Dashboard </li>
            <li> Apply </li>
            <li> Investment </li>
            <li> Forex Counter </li>
            <li> Inbox </li>
            <li> Setting </li>
          </ul>
        </div>
    </div>
        </>
    );
};
export default MDside;
