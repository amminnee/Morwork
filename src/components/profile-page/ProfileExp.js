import React from "react"
import image from "../../wedo.png"
import Skeleton from "react-loading-skeleton"

export default function ProfileExp(props) {
    return(
        <div className="jobItem profile">
            <div className="top-job">
                <div className="shortInfo-job">
                    { props.isLoading ?
                        <Skeleton height={60} width={60} />
                        :
                        <img src={image} />
                    }
                    
                    <div className="info-job">
                        { props.isLoading ?
                            <Skeleton height={25} width={140} />
                            :
                            <p className="medium-title">Java Developper</p>
                        }
                        
                        { props.isLoading ?
                            <Skeleton height={15} width={80} />
                            :
                            <p className="small-text">Facebook</p>
                        }
                        
                        { props.isLoading ?
                            <Skeleton height={10} width={60} />
                            :
                            <p className="medium-label">Casablanca Maarif</p>
                        }
                        
                        { props.isLoading ?
                            <Skeleton height={10} width={100} />
                            :
                            <p className="small-label">23 June 2023 - 15 Jan 2024</p>
                        }
                        
                </div>
                </div>
                { props.isLoading ?
                    <Skeleton height={10} width={50} />
                    :
                    <div className="small-label">full time</div>
                }
               
            </div>
        </div>
    )
}
