import React, {useState} from "react"
import NotificationItem from "./NotificationItem"
import NotificationSkeleton from "./NotificationSkeleton";
export default function Notification(props){

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        const initialLoadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(initialLoadingTimeout);
    }, []);


    return(
        <div className="notification radius">
            <h1 className="large-title">Notification</h1>
            {isLoading ? <NotificationSkeleton />: <NotificationItem />}
            {isLoading ? <NotificationSkeleton />: <NotificationItem />}
            {isLoading ? <NotificationSkeleton />: <NotificationItem />}
            {isLoading ? <NotificationSkeleton />: <NotificationItem />}
            {isLoading ? <NotificationSkeleton />: <NotificationItem />}
            
        </div>
    )
}