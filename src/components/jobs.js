import React from "react";
import JobItem from "./jobItem";

export default function Jobs(){

    return(
        <div className="Jobs-container radius">
            <div className="title-job-container">
                <h1 className="large-title jobs-title">Jobs in Morocco</h1>
                <p className="small-text">Explore Jobs near you</p>
            </div>
            <JobItem />
            <JobItem />
            <JobItem />
        </div>
    )
}