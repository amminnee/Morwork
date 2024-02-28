import React from "react"
import { Icon } from "@iconify/react"
import avatar from "../avatar.jfif"
import PostInteraction from "./PostInteraction";

export default function Post(props) {
    return (
        <div className="radius post">
            <div className="top-section">
                <div className="user-profile">
                    <img className="avatar" src={avatar} />
                    <div className="user-info">
                        <p className="medium-title">{props.username}</p>
                        <p className="medium-label">{props.title}</p>
                        <p className="medium-label">{props.time}</p>
                    </div>
                </div>
                <div className="options">
                    <button className="primary-button text-button">Follow</button>
                    <Icon icon="tabler:dots" />
                </div>
            </div>
            <div className="text-section">
                <p className="normal-text">{props.text}</p>
                <p className="medium-label">See more</p>
            </div>
            <img src={props.photo} className="post-media" />
            <div className="info-section">
                <p className="medium-label">{props.likes} likes</p>                            
                <p className="medium-label">{props.comments} comments</p>              
            </div>
            <div className="interaction-section">
                <PostInteraction
                    icon="bx:like"
                    text="Like"
                />
                <PostInteraction
                    icon="material-symbols:comment-outline"
                    text="Comment"
                />
                <PostInteraction
                    icon="zondicons:repost"
                    text="Repost"
                />
                <PostInteraction
                    icon="ph:share-fat-bold"
                    text="Share"
                />
                <PostInteraction
                    icon="mingcute:bookmark-line"
                    text="Save"
                />
            </div>
        </div>
    )
}