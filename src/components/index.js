import React from 'react';
import CommentBox from '../containers/AddComment';
import CommentList from '../containers/VisibleComment';

const Template = () => {
    return (
        <div>
            <CommentBox />
            <CommentList />
        </div>
    );
}

export default Template;