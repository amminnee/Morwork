import React from "react";
import ProfileCard from "./ProfileCard";
import Suggestions from "./Suggestions";
import cybertruck from "../cybertruck.jpg"
import avatar from "../avatar.jfif"

export default function SideInfo(props) {
    return (
        // hidden className hides the component from mobile layout
        <div className="side-info hidden">
            <ProfileCard 
                cover={cybertruck}
                avatar={avatar}
                username="Amine Edarkaoui"
                title="Software engineer"
            />
            <Suggestions />
        </div>
    )
}