import React from "react";
import image from "../wedo.png"

export default function JobItem(){

    return(
        <div>
            <div className="jobItem">
                <div className="top-job">
                    <div className="shortInfo-job">
                        <img src={image} />
                        <div className="info-job">
                            <p className="medium-title">Java Developper</p>
                            <p className="small-text">Facebook</p>
                            <p className="medium-label">Casablanca Maarif</p>
                    </div>
                    </div>
                    <div className="small-label">full time</div>
                </div>
                <div className="bottom-job">
                    <div className="blue-button apply-now"><i class="fa-solid fa-arrow-right"></i> Apply now</div>
                    <div className="primary-button">more details</div>
                </div>
            </div>
            <div className="separator"></div>
        </div>
        
    )
}