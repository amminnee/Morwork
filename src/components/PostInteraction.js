import React from "react";
import { Icon } from "@iconify/react";

export default function PostInteraction(props) {
    return (
        <div 
            className={`post-interaction ${props.active && 'active'}`}
        >
            <Icon icon={props.icon} className="icon"/>
            <p className="medium-text">{props.text}</p>
        </div>
    )
}