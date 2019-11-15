import React from 'react';
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import cn from "classnames";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {
    return <div>
           <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
           totalItemsCount={totalUsersCount} pageSize={pageSize}/>
           <div>
            {
            props.users.map(u => <User 
                key={u.id} 
                user={u} 
                followingInProgress={props.followingInProgress}
                follow={props.follow} 
                unfollow={props.unfollow} 
            />
            )
            }
            </div>
    </div>
}

export default Users;