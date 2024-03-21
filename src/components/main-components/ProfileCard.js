import React from "react";

export default function ProfileCard(props) {
    return (
        <div className="elevation-1 radius profile-card">
            <div className="cover-img">
                <img src={props.cover} className="radius" />
            </div>
            <div className="user-info-cont">
                <img src={props.avatar} className="avatar" />
                <div className="flex">
                    <div className="flex">
                        <p className="medium-title">{props.username}</p>
                        <p className="medium-label">{props.title}</p>
                    </div>
                    <div className="separator"></div>
                    <button className="blue-button text-button">Visit profile</button>
                </div>
            </div>
        </div>
    )
}