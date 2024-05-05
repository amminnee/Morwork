import { Icon } from "@mui/material";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MessageItem from "./MesssageItem";

export default function Discussion (){


    const [messages, setMessages] = React.useState(["slm","cv","hmd tt","hmd","ewa","mn 3andk", "walo", "ta ana walo", "safi ghayrha"])

    const messageContainerRef = React.useRef(null);

    React.useEffect(() => {
        // to be on last message
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);


    return(
        <div className="discussion radius" style={{position:"relative"}}>
            <div className="discussion-header">
                <div className="chat-item">
                        <div className="left">
                        <ArrowBackIcon fontSize="medium" style={{color:"#555"}} />
                            <div className="user-image-container">
                                <img src={`http://localhost:8081/media/avatar.jpg`} className="userImage-messageList"/>
                            </div>
                            <div className="chatItem-info">
                                <span className="medium-text"><b>{`Amine Belhadi`}</b></span>
                            </div>
                        </div> 
                        
                    <div className="options">
                        <MoreHorizIcon style={{color:"#555"}}/>
                    </div> 
                </div>
            </div>

            
            <div ref={messageContainerRef} style={{overflowY:"auto",display:"flex",flexDirection:"column", maxHeight:"450px",  scrollbarWidth:"none",scrollBehavior:"smooth", position:"absolute", bottom:"0",left:"0", width:"100%", minHeight:"50px", marginBottom:"47px"}}>

                {messages.map((message, index) =>  <MessageItem content={message} messageSource={index % 2 === 0 ? "me" : ""} />)}
               
                
            </div>

            <div className="comment-input-container">
                <input type="text" placeholder="Type your message" name="comment" className="commentInput" />
                <button className="primary-button comment-btn radius"
                onClick={()=>{
                    setMessages([...messages, "laydwmha n3ma t3am o lma"])
                }}>Send</button>
            </div>
            

            

            
            
        </div>
    )
}