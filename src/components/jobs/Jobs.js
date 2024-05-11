import React, { useState } from "react";
import JobItem from "./JobItem";
import JobSkeleton from "./JobSkeleton";
import { getAllOffers } from "../../api/app";

export default function Jobs(){
    const [isLoading, setIsLoading] = React.useState(true)
    const [jobs, setJobs] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [error, setError] = useState(null)

    const getOffers = async () => {
        setIsLoading(true)
        const offers = await getAllOffers()
        if (offers instanceof Error) {
            setError("An error has occured")
        } else {
            setJobs(offers)
            setIsLoading(false)
            setError(null)
        }
    }

    React.useEffect(() => {
        getOffers()
    }, []);

    return(
        <div className="Jobs-container radius">
            <div className="title-job-container">
                <h1 className="large-title jobs-title">Jobs in Morocco</h1>
                <p className="large label">Explore Jobs near you</p>
            </div>
        {
            isLoading ?
                <JobSkeleton />
            :
            (jobs === null || jobs.length === 0 ?
                <p className="small-text"style={{margin:20, textAlign:"center"}}>no job offer posts yet</p>
            :
            <div>
                {jobs.map(offer => <JobItem 
                    isAdmin={isAdmin}
                    key={offer.id}
                    {...offer}
                />
                )}
            </div>
            )
        }         
        </div>
    )
}