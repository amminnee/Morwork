import React from "react";
import image from "../../morwork.png"
import image2 from "../../image.png"
import { NavLink } from "react-router-dom";

export default function JobItem(props){

    const [jobId, setJobId] = React.useState(null)
    const [buttonText, setButtonText] = React.useState("more details")


    function moreInfoClick(id){
        setJobId((prevId) => (prevId === id ? null : id))
        setButtonText((prevText) =>
            prevText === "more details" ? "less details" : "more details"
        )
    }


    return(
        <div>
            <div className="jobItem">
                <div className="top-job">
                    <div className="shortInfo-job">
                        <img src={props.company.image} />
                        <div className="info-job">
                            <p className="medium-title">{props.title}</p>
                            <NavLink style={{textDecoration:"none"}} to={`/organization/${props.company.id}`}>
                                <p className="small-text clickable">{props.company.name}</p>
                            </NavLink>
                            <p className="medium-label">{props.city.name}</p>
                        </div>
                    </div>
                    <div className="small-label">full time</div>
                </div>
                {jobId === props.id &&
                <div className="job-detail-container">
                    <p className="medium-title">Job description</p>
                    <div className="jobDetail normal-text">
                       {props.description}
                    </div>
                </div>
                }
                <div className="bottom-job">
                    {
                        !props.isAdmin && 
                        <div className="blue-button apply-now"><i class="fa-solid fa-arrow-right"></i> Apply now</div>
                    }
                    <div className="primary-button" onClick={() => moreInfoClick(props.id)}>{buttonText}</div>
                </div>
            </div>
            
            <div className="separator"></div>
            
        </div>
        
    )
}