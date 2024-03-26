import React from "react"
import Skeleton from "react-loading-skeleton"

export default function ProfileExp(props) {
    return(
        <div className="jobItem profile">
            <div className="top-job">
                <div className="shortInfo-job">
                    { props.isLoading ?
                        <Skeleton height={60} width={60} />
                        :
                        <img src={props.company.image} />
                    }
                    
                    <div className="info-job">
                        { props.isLoading ?
                            <Skeleton height={25} width={140} />
                            :
                            <p className="medium-title">{props.title}</p>
                        }
                        
                        { props.isLoading ?
                            <Skeleton height={15} width={80} />
                            :
                            <p className="small-text">{props.company.name}</p>
                        }
                        
                        { props.isLoading ?
                            <Skeleton height={15} width={60} />
                            :
                            <p className="medium-label">{props.city.name}</p>
                        }
                        
                        { !props.isLoading &&
                            <p className="small-label">{props.startDate} - {props.endDate}</p>
                        }
                        
                </div>
                </div>
                { props.isLoading ?
                    <Skeleton height={10} width={50} />
                    :
                    <div className="small-label">{props.jobType.name}</div>
                }
               
            </div>
        </div>
    )
}
