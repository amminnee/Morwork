import React from "react";
import { formatPostTime } from "../post-feed/Feed";
import ChatItem from "./ChatItem";


export default function MessagesList(props){

    return(
        <div className="Message-list radius">
            <div className="large-title messages-list-header">
                Messages
            </div>
            <div style={{marginTop:"9px"}}>
                <ChatItem />
                <ChatItem />
                <ChatItem />
                <ChatItem />
            </div>
        </div>
    )
}