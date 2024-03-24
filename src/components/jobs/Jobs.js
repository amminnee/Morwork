import React from "react";
import JobItem from "./JobItem";
import JobSkeleton from "./JobSkeleton";

export default function Jobs(){

    console.log(localStorage.getItem("token"))
    const jobs = [ // (temp data) 
        {
        id: 1,
        content: "Join our dynamic team as a Java Developer and play a key role in crafting innovative and scalable Java-based solutions. As a member of our talented development team, you will be responsible for designing, coding, testing, and maintaining high-performance applications. If you have a passion for Java development, a strong problem-solving mindset, and the desire to contribute to cutting-edge projects, we invite you to apply. We offer a competitive salary of DH 12,000 per month, and the average post-hour response time is 3 minutes.",
        salary: 12000,
        postHour: "3min",
        },
        {
        id: 2,
        content: "Are you a skilled Frontend Developer with a flair for creating visually appealing and user-friendly interfaces? Join WebTech Innovations as a Frontend Developer and be part of a creative team that values innovation and excellence. This role involves using your expertise in JavaScript, React, HTML, and CSS to build responsive web applications. We offer a competitive salary of DH 10,000 per month, and the average post-hour response time is 2 minutes.",
        salary: 10000,
        postHour: "2min",
        },
        {
        id: 3,
        content: "Exciting opportunity for a Software Engineer to contribute to cutting-edge software solutions! As a Software Engineer, you'll be involved in the entire software development lifecycle, from concept to delivery. If you have a passion for coding, problem-solving skills, and a keen interest in creating robust software, we want to hear from you. We offer a competitive salary of DH 11,000 per month, and the average post-hour response time is 4 minutes.",
        salary: 11000,
        postHour: "4min",
        },
        {
        id: 4,
        content: "Join our team as a Full Stack Developer and work on diverse projects that require expertise in both frontend and backend technologies. As a Full Stack Developer, you'll be responsible for creating seamless and integrated applications. If you're a versatile developer with experience in various technologies, we'd love to have you on board. We offer a competitive salary of DH 13,000 per month, and the average post-hour response time is 5 minutes.",
        salary: 13000,
        postHour: "5min",
        },
        {
        id: 5,
        content: "Explore your passion for mobile app development with us! As a Mobile App Developer, you'll be involved in creating innovative and user-friendly mobile applications. If you have expertise in mobile development technologies and a creative approach to problem-solving, we encourage you to apply. We offer a competitive salary of DH 11,500 per month, and the average post-hour response time is 3 minutes.",
        salary: 11500,
        postHour: "3min",
        }
    ]

    const jobElements = jobs.map(job => <JobItem id={job.id} content={job.content}
        salary={job.salary} postHour={job.postHour} />)

        const [isLoading, setIsLoading] = React.useState(true)

        React.useEffect(() => {
            const initialLoadingTimeout = setTimeout(() => {
                setIsLoading(false);
            }, 1000);
    
            return () => clearTimeout(initialLoadingTimeout);
        }, []);

    return(
        <div className="Jobs-container radius">
            <div className="title-job-container">
                <h1 className="large-title jobs-title">Jobs in Morocco</h1>
                <p className="large label">Explore Jobs near you</p>
            </div>
            {isLoading ? <JobSkeleton /> : jobElements}
        </div>
    )
}