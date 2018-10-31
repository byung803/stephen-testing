import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    return (
        <ul>
            {props.comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />
            })}
        </ul>
    )
}

export default CommentList;
