import React from "react";
import MessagesList from "./MessagesList";
import Discussion from "./Discussion";
import Header from "../navigation/header";

import SockJS from "sockjs-client";
import { over } from "stompjs";

var stompClient=null;
export default function MessagesPage(){

    React.useEffect(()=>{
        let sock = new SockJS('http://localhost:8081/ws')
        console.log(sock)
        stompClient=over(sock)
        stompClient.connect({},onConnect,onError)
    },[])

    const onConnect = ()=>{
        console.log("connected")
    }
    const onError = ()=>{
        console.log("error")

    }

    return(
        <div style={{width:"100%", position:"fixed"}}>
            <Header isVisible={true} />
            <div className="Message-page">
                <MessagesList />
                <Discussion />
            </div>
        </div>
    )
}