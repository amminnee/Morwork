import React from "react";
import ProfileCard from "./ProfileCard";
import Suggestions from "./suggested-users/Suggestions";

export default function SideInfo(props) {
    return (
        // hidden className hides the component from mobile layout
        <div className="side-info hidden">
            <ProfileCard />
            <Suggestions />
        </div>
    )
}