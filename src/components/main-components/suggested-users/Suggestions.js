import React from "react";
import UserLine from "./UserLine";
import avatar from "../../../avatar.jfif"

export default function Suggestions() {
    return (
        <div className="suggestions radius elevation-1">
            <p className="small-title">Suggested for you</p>
            <div>
                <UserLine 
                    avatar={avatar}
                    username="Amine Edarkaoui"
                    title="software engineer"
                />
                <UserLine 
                    avatar={avatar}
                    username="Amine Edarkaoui"
                    title="software engineer"
                />
                <UserLine 
                    avatar={avatar}
                    username="Amine Edarkaoui"
                    title="software engineer"
                />
            </div>
            
            <div className="separator"></div>
            <button className="blue-button text-button">See more</button>
        </div>
    )
}