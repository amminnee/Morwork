import React from "react"
import { Icon, InlineIcon } from '@iconify/react';

export default function NavItem(props) {
    return (
        <div 
            className={`nav-item ${props.active && 'active'} ${props.hidden && 'hidden'}`}
            onClick={() => {props.handleClick(props.name);
            props.name === "post" && props.onOpen() }}
        >
            {props.icon && <Icon icon={props.icon} className="icon" />}
            {props.img && <img src={props.img} className="avatar" />}
            <p className="medium-text">{props.text}</p>
        </div>
    )
}