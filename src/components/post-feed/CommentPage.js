import React from "react";
import { getPostById, newComment } from "../../api/app";
import { useParams } from "react-router-dom";
import Post from "./Post";
import Header from "../navigation/header";
import CommentElement from "./CommentElement";

export default function CommentPage(){

    const [commentContent, setCommentContent] = React.useState("")
    const [comments, setComments] = React.useState([])



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
                setCommentContent(""); // Clear the comment content input
            })
            .catch((error) => console.error("Failed to add comment:", error));
    };
    
    
    React.useEffect(()=>console.log(comments),[comments])
    


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
            <div className="comments-container radius" >

                {
                    comments.map(comment => (
                    <CommentElement 
                    user={comment.user}
                    author={`${comment.user.firstName} ${comment.user.lastName}`} 
                    content={comment.content} 
                    replies={comment.replies}
                    likes={comment.likes}
                    date={formatPostTime(comment.date)}
                    />))
                }
                <div className="comment-input-container" >
                    <input type="text" placeholder="leave a comment" name="comment" className="commentInput" onChange={(event)=>handleCommentContent(event)} value={commentContent}/>
                    <button className="primary-button comment-btn radius" onClick={()=>handleNewComment()}>Comment</button>
                </div>
            </div>
        </div>
        </div>
    )
}