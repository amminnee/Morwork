import React from "react";
import { getAllCommentLikesByPostId, getCommentById, getPostById, likeComment, newComment, newReply } from "../../api/app";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Header from "../navigation/Header";
import CommentElement from "./CommentElement";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CommentPage(){

    const [commentContent, setCommentContent] = React.useState("")
    const [comments, setComments] = React.useState([])
    const [commentLikes, setCommentLikes] = React.useState([])
    const [replyTo, setReplyto] = React.useState(null)




    const postId = useParams()
    console.log(postId.postId)
    const [post, setPost] = React.useState(null)
    React.useEffect(()=>{
        getPostById(postId.postId).then(res => {
            setPost(prevPost => res.data)
            const sortedComments = res.data.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
            setComments(sortedComments);
        })
    }, [postId])
    const formatPostTime = (postDate) => {
        const currentDate = new Date();
        const postDateTime = new Date(postDate);
        const elapsedTimeInMilliseconds = currentDate - postDateTime;

        const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
        if (seconds < 60) {
            return `${seconds}s`;
        }

        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) {
            return `${minutes}m`;
        }

        const hours = Math.floor(minutes / 60);
        if (hours < 24) {
            return `${hours}h`;
        }

        const days = Math.floor(hours / 24);
        return `${days}d`;
    };


    const handleCommentContent = (event) =>{
        setCommentContent(event.target.value)
    }

    const handleNewComment = () => {

        if(replyTo){
            console.log("commentId: "+replyTo.commentId+" userId: "+localStorage.getItem("userId")+" content: "+commentContent)
            newReply(replyTo.commentId, Number(localStorage.getItem("userId")), commentContent)
            .then(res => console.log(res.data))
            window.location.reload()
            return;
        }



        newComment(postId.postId, Number(localStorage.getItem("userId")), commentContent)
            .then(() => {
                return getPostById(postId.postId)
                    .then((res) => {
                        const sortedComments = res.data.comments.sort((a, b) => new Date(b.date) - new Date(a.date));
                        return { post: res.data, comments: sortedComments };
                    });
            })
            .then(({ post, comments }) => {
                setPost(post);
                setComments(comments);
                setCommentContent(""); 
            })
            .catch((error) => console.error("Failed to add comment:", error));
    };
    
    
    React.useEffect(()=>console.log(comments),[comments])
    
    React.useEffect(() => {
        getAllCommentLikesByPostId(postId.postId)
            .then(res => {
                console.log(res.data);
                setCommentLikes(res.data)
            })
            .catch(error => {
                console.error("Failed to fetch comment likes:", error);
            });
    }, [postId.postId]);

    
    const handleReply = (username, commentId) => {
        setReplyto({username, commentId})
    }

    const handleCancelReply = ()=>{
        setReplyto(null)
    }

    return(
        <div style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
        <Header isVisible={true}/>
        <div className="comment-page">
            <div className="post-container">
            {
            post != null &&
            <Post
            username={`${post.firstName} ${post.lastName}`}
            title={post.title}
            time={formatPostTime(post.date)}
            text={post.content}
            photo={post.image}
            likes={post.likes}
            comments={post.comments}
            id={post.id}
            user={post.userId}
            />
            }
            </div>
            <div style={{position:"relative", background:"#FFF"}}>
                <div className="comments-container radius">

                    {
                        comments.map(comment => (
                        <CommentElement 
                        id={comment.id}
                        user={comment.user}
                        author={`${comment.user.firstName} ${comment.user.lastName}`} 
                        content={comment.content} 
                        replies={comment.replies}
                        likes={comment.likes}
                        //commentLikes={commentLikes}
                        postId={postId.postId}
                        onReply={handleReply}
                        formatTime={formatPostTime}
                        date={formatPostTime(comment.date)}
                        />))
                    }
                
                </div>
                {replyTo && (
                        <div className="reply-container">
                            <div>Replying to: <b style={{color:"#000"}}>{replyTo.username}</b></div>
                            <Icon icon="ic:round-cancel" className="cancel-icon" onClick={handleCancelReply} style={{cursor:"pointer", fontSize:"17px"}} />
                        </div>
                )}
                <div className="comment-input-container" >
                    <input type="text" placeholder="leave a comment" name="comment" className="commentInput" onChange={(event)=>handleCommentContent(event)} value={commentContent}/>
                    <button className="primary-button comment-btn radius" onClick={()=>handleNewComment()}>Comment</button>
                </div>
            </div>
        </div>
        </div>
    )
}