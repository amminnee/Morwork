import { Icon } from "@iconify/react";
import React from "react";
import PostInteraction from "./PostInteraction";


export default function CommentElement(props){

    return(
    <div className="comment">
        <div className="top-section">
            <div className="user-profile">
                <img className="avatar" width={40} height={40} src={"http://localhost:8081/media/todox.jpg"} alt="User avatar" />
                <div className="user-info">
                    <p className="medium-title">{props.author}</p>
                    <p className="medium-label">{"Java Developper"}</p>
                    
                </div>
                </div>
            <div className="options">
                <p className="small-label">{props.date}</p>
                <Icon icon="tabler:dots" />
            </div>
      </div>

      <div className="text-section" style={{display: "flex", alignItems:"end"}}>
            <div style={{minWidth: "60%", paddingLeft:"55px"}}>
                <p className="normal-text" style={{minWidth: "93%", marginTop: "-4px", marginBottom: "3px"}}>
                {props.content}
                </p>
                <div className="options" style={{marginLeft: "-5px"}}><p className="small-label">6 likes | 2 Reply</p></div>
            </div>
            <div className="options"><PostInteraction icon="bx:like" style={{width: "45px"}} /></div>
        </div>

        {   props.replies.length !== 0 &&
            <div className="reply" style={{width: "88%", position: "relative", right: "-42px"}}>
                <div className="top-section">
                    <div className="user-profile">
                        <img className="avatar" width={40} height={40} src={"http://localhost:8081/media/todox.jpg"} alt="User avatar" />
                        <div className="user-info">
                            <p className="medium-title">{props.author}</p>
                            <p className="medium-label">{"Java Developper"}</p>
                            
                        </div>
                        </div>
                    <div className="options">
                        <p className="small-label">{"5d"}</p>
                        <Icon icon="tabler:dots" />
                    </div>
                </div>

                <div className="text-section" style={{display: "flex", alignItems:"end"}}>
            <div style={{minWidth: "60%", paddingLeft:"55px"}}>
                <p className="normal-text" style={{minWidth: "93%", marginTop: "-4px", marginBottom: "3px"}}>
                {props.content}
                </p>
                <div className="options" style={{marginLeft: "-5px"}}><p className="small-label">6 likes | 2 Reply</p></div>
            </div>
            <div className="options"><PostInteraction icon="bx:like" style={{width: "45px"}} /></div>
        </div>
        </div>
        }
    </div>
    )
}