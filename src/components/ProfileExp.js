import React from "react"
import image from "../wedo.png"

export default function ProfileExp() {
    return(
        <div className="jobItem profile">
            <div className="top-job">
                <div className="shortInfo-job">
                    <img src={image} />
                    <div className="info-job">
                        <p className="medium-title">Java Developper</p>
                        <p className="small-text">Facebook</p>
                        <p className="medium-label">Casablanca Maarif</p>
                        <p className="small-label">23 June 2023 - 15 Jan 2024</p>
                </div>
                </div>
                <div className="small-label">full time</div>
            </div>
        </div>
    )
}
