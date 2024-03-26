import React from "react";
import Post from "./Post";
import SideInfo from "../main-components/SideInfo"
import PostSkeleton from "./PostSkeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import { getPosts } from "../../api/app";

export default function Feed() {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(
        () => {
            getPosts()
            .then(res=>{
                setPosts(res.data)
                setIsLoading(false)
                console.log(res.data)
            })
            .catch(err=>console.log(err))
        }
        ,[])

        console.log("the user on local"+localStorage.getItem("userId"))


    return (
        <div className="home-page">
            <div className="post-feed">
                {isLoading ? (
                    <>
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                        <PostSkeleton />
                    </>
                ) : (
                    posts.map(post => (
                        <Post 
                            key={post.id}
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
                            
                    ))
                )}
            </div>
            <SideInfo />
        </div>
    );
}

export const formatPostTime = (postDate) => {
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