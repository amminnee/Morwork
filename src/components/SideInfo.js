import React from "react";
import ProfileCard from "./ProfileCard";
import Suggestions from "./Suggestions";
import cybertruck from "../cybertruck.jpg"
import avatar from "../avatar.jfif"

export default function SideInfo(props) {
    return (
        <div className="side-info">
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