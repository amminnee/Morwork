import React from "react";
import image from "../wedo.png"

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
                    <div className="primary-button" onClick={() => moreInfoClick(props.id)}>{buttonText}</div>
                </div>
            </div>
            {jobId === props.id &&
            <div className="jobDetailContainer">
                <div className="separator"></div>
                <h1 className="medium-title">Détails</h1>
                <div className="jobDetail medium-text">
                    {props.content}
                </div>
                <div className="supplementaireInfo ">
                    <div className="postHour"><span>{props.postHour}</span> <i class="fa-solid fa-stopwatch"></i></div>
                    <div className="salary"><span> {props.salary} </span>DH <i class="fa-solid fa-coins"></i></div>
                </div>
            </div>
            }
            <div className="separator"></div>
        </div>
        
    )
}