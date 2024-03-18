import React from "react"
import Post from "./Post"
import postPhoto from "../../post-photo.jpg"
import SideInfo from "../main-components/SideInfo";
import PostSkeleton from "./PostSkeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Feed() {

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const initialLoadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(initialLoadingTimeout);
    }, []);


    return (
        <div className="home-page">
            <div className="post-feed">
                {isLoading ? <PostSkeleton /> : <Post 
                    username="Amine Edarkaoui"
                    title="Software engineer"
                    time="21h"
                    text="Dear Network
                    I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years.
                    
                    I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                    photo={postPhoto}
                    likes="23"
                    comments="6"
                />}
                {isLoading ? <PostSkeleton /> : <Post 
                    username="Amine Edarkaoui"
                    title="Software engineer"
                    time="21h"
                    text="Dear Network
                    I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years.
                    
                    I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                    photo={postPhoto}
                    likes="23"
                    comments="6"
                />}
                {isLoading ? <PostSkeleton /> : <Post 
                    username="Amine Edarkaoui"
                    title="Software engineer"
                    time="21h"
                    text="Dear Network
                    I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years.
                    
                    I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                    photo={postPhoto}
                    likes="23"
                    comments="6"
                />}
                {isLoading ? <PostSkeleton /> : <Post 
                    username="Amine Edarkaoui"
                    title="Software engineer"
                    time="21h"
                    text="Dear Network
                    I’m happy to annouce that I have just passed my final exam in computer science, finishing with it my long extended career in IT, which have taken a long part of my life in the past five years.
                    
                    I’m also thrilled to thank all my classmates and professors for there unconditioned support and help throughout my journey."
                    photo={postPhoto}
                    likes="23"
                    comments="6"
                />}
                
                
            </div>
            <SideInfo />
        </div>
        
    )
}