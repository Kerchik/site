import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
       <div className={s.item}>
            <img src="https://i1.i.ua/prikol/pic/4/7/418574.jpg" alt=""/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
 
    )
}
 
export default Post;