import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import PostInteraction from "./PostInteraction";
import { getAllCommentLikesByPostId, likeComment, likeReply } from "../../api/app";

function Reply(props){
    const [isLiked, setIsLiked] = useState(false);
    const [likesReplyCount, setReplyCount] = useState(props.reply.likes.length);

    useEffect(() => {
        props.reply.likes.some((like) => like.user.id === Number(localStorage.getItem("userId"))) ?
            setIsLiked(true) : setIsLiked(false);
    }, []);

    function handleLikeReplyState(){
        setReplyCount(prev => (isLiked ? prev - 1 : prev + 1));
        setIsLiked(!isLiked);
    }

    return(
        <div className="reply" style={{width: "88%", position: "relative", right: "-42px"}}>
            <div className="top-section">
                <div className="user-profile">
                    <img className="avatar" width={30} height={30} src={`http://localhost:8081/media/${props.user.profilePicture}`} alt="User avatar" />
                    <div className="user-info">
                        <p className="small-title">{props.userName}</p>
                        <p className="small-label">{`${props.user.title}`}</p>
                    </div>
                </div>
                <div className="options">
                    <p className="small-label">{props.formatTime(props.reply.date)}</p>
                    <Icon icon="tabler:dots" />
                </div>
            </div>

            <div className="text-section" style={{display: "flex", alignItems:"end"}}>
                <div style={{minWidth: "60%", paddingLeft:"55px"}}>
                    <p className="normal-text" style={{minWidth: "93%", marginTop: "-6px", marginBottom: "3px",marginLeft:"-10px"}}>
                        {props.reply.content}
                    </p>
                    <div className="options" style={{marginLeft: "-20px"}}>
                        <p className="small-label">{likesReplyCount} likes</p>
                    </div>
                </div>
                {isLiked ? (
                    <PostInteraction
                        icon="bxs:like"
                        style={{ width: "45px", color: "blue" }}
                        onClick={() => {handleLikeReplyState(); props.handleLikeReply(props.reply.id)}}
                    />
                ) : (
                    <PostInteraction
                        icon="bx:like"
                        style={{ width: "45px" }}
                        onClick={() => {handleLikeReplyState(); props.handleLikeReply(props.reply.id)}}
                    />
                )}
            </div>
        </div>
    )
}

export default function CommentElement(props){
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(props.likes.length);
    const [showAllReplies, setShowAllReplies] = useState(false);

    const handleLikeComment = () => {
        likeComment(props.id, Number(localStorage.getItem("userId")))
            .then(res => {
                setLiked(prevLiked => !prevLiked);
                setLikesCount(prevCount => (liked ? prevCount - 1 : prevCount + 1));
            })
            .catch(error => {
                console.error("Failed to like comment:", error);
            });
    }

    const handleLikeReply = (id) => {
        likeReply(id, Number(localStorage.getItem("userId")))
            .then(res => console.log(res));
    }

    useEffect(() => {
        getAllCommentLikesByPostId(props.postId)
            .then(res => {
                const likedByCurrentUser = res.data.some(commentLike => 
                    commentLike.comment.id === props.id && 
                    commentLike.user.id === Number(localStorage.getItem("userId"))
                );
                setLiked(likedByCurrentUser);
                const likesForComment = res.data.filter(commentLike => commentLike.comment.id === props.id);
                setLikesCount(likesForComment.length);
            })
            .catch(error => {
                console.error("Failed to fetch comment likes:", error);
            });
    }, [props.postId, props.id]);

    function handleReply(){
        console.log("Reply to "+props.author);
    }

    return(
        <div className="comment">
            <div className="top-section">
                <div className="user-profile">
                    <img className="avatar" width={40} height={40} src={`http://localhost:8081/media/${props.user.profilePicture}`} alt="User avatar" />
                    <div className="user-info">
                        <p className="medium-title">{props.author}</p>
                        <p className="medium-label">{"Java Developper"}</p>
                    </div>
                </div>
                <div className="options">
                    <p className="small-label">{props.date}</p>
                    <Icon icon="tabler:dots" />
                </div>
            </div>

            <div className="text-section" style={{display: "flex", alignItems:"end"}}>
                <div style={{minWidth: "60%", paddingLeft:"55px"}}>
                    <p className="normal-text" style={{minWidth: "93%", marginTop: "-4px", marginBottom: "3px"}}>
                        {props.content}
                    </p>
                    <div className="options" style={{marginLeft: "-5px"}}>
                        <p className="small-label">{likesCount} Likes | <span style={{cursor:"pointer"}} onClick={()=>props.onReply(props.author, props.id)}> {props.replies.length === 0 ? "" : props.replies.length} Reply</span> </p>
                    </div>
                </div>
                <div className="options">
                    {liked ?
                        <PostInteraction icon="bxs:like" style={{width: "45px", color: "blue", marginLeft:"55px"}} onClick={handleLikeComment} />
                        :
                        <PostInteraction icon="bx:like" style={{width: "45px", marginLeft:"55px"}} onClick={handleLikeComment} />
                    }
                </div>
            </div>

            {props.replies.length > 0 && (
                <>
                    <Reply
                        userName={`${props.replies[0].user.firstName} ${props.replies[0].user.lastName}`}
                        user={props.replies[0].user}
                        reply={props.replies[0]}
                        handleLikeReply={handleLikeReply}
                        handleReply={handleReply}
                        formatTime={props.formatTime}
                    />
                    {props.replies.length > 1 && !showAllReplies && (
                        <div className="show-more-replies small-label" onClick={() => setShowAllReplies(true)} style={{cursor:"pointer", marginLeft:"60px", fontWeight:"500"}}>Show more replies</div>
                    )}
                    {showAllReplies && props.replies.slice(1).map(reply => (
                        <Reply
                            key={reply.id}
                            userName={`${reply.user.firstName} ${reply.user.lastName}`}
                            user={reply.user}
                            reply={reply}
                            handleLikeReply={handleLikeReply}
                            handleReply={handleReply}
                            formatTime={props.formatTime}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
