import React from "react";
import { Icon } from "@iconify/react";

export default function UserLine(props) {
    return (
        <div className="user-line top-section">
            <div className="user-profile">
                <img className="avatar line" src={props.avatar} />
                <div className="user-info">
                    <p className="small-title">{props.username}</p>
                    <p className="medium-label">{props.title}</p>
                </div>
            </div>
            <div className="options">
                <button className="primary-button text-button">Follow</button>
                <Icon icon="material-symbols-light:close" />
            </div>
        </div>
    )
}