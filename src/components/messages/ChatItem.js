import React from "react";

export default function ChatItem(){

    return(
        <div>
            <div className="chat-item" style={{cursor:"pointer"}}>
                    <div className="left">
                        
                        <div className="user-image-container">
                            <img src={`http://localhost:8081/media/avatar.jpg`} className="userImage-messageList"/>
                        </div>
                        <div className="chatItem-info">
                            <span className="normal-text"><b>{`Amine Belhadi`}</b></span>
                            <div className="large-label">Hello world</div>
                        </div>
                    </div> 
                    <div className="right normal-text">3s</div>
                </div>
        </div>
    )
}