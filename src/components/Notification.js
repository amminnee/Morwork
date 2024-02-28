import React, {useState} from "react"
import NotificationItem from "./NotificationItem"
export default function Notification(props){


    return(
        <div className="notification radius">
            <h1 className="large-title">Notification</h1>
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
        </div>
    )
}