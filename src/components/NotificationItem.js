import React from "react";
import avatar from "../avatar.jfif"

export default function NotificationItem(){

    return (
        <div className="notificationItem">
            <div className="left">
                <div className={"isSeen"}></div>
                <div className="user-image-container">
                    <img src={avatar} className="userImage-notification"/>
                </div>
                <div className="notification-info">
                    <span className="normal-text"><b>Amine Belhadi</b> Like your post</span>
                </div>
            </div> 
            <div className="right normal-text">3h</div>
        </div>
    )
}