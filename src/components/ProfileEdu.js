import React from "react"
import image from "../est.png"

export default function ProfileEdu() {
    return(
        <div className="jobItem profile">
            <div className="top-job">
                <div className="shortInfo-job">
                    <img src={image} />
                    <div className="info-job">
                        <p className="medium-title">EST FBS</p>
                        <p className="small-text">Genie Informatique</p>
                        <p className="medium-label">Fkih Ben Saleh Province</p>
                        <p className="small-label">23 June 2023 - 15 Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
