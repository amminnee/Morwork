import React from "react";
import image from "../post-photo.jpg"

export default function JobItem(){

    return(
        <div className="jobItem">
            <div className="top-job">
                <div className="shortInfo-job">
                    <img src={image} />
                    <div className="info-job">
                        <p className="medium-title">Java Developper</p>
                        <p className="small-text">Facebook</p>
                        <p className="small-text">Casablanca Maarif</p>
                   </div>
                </div>
                <div className="small-text">full time</div>
            </div>
            <div className="bottom-job">
                <div className="blue-button apply-now radius"><i class="fa-solid fa-arrow-right"></i> Apply now</div>
                <div className="more-details medium-text">more details</div>
            </div>
        </div>
    )
}