import React from 'react';
import CommentBox from '../components/CommentBox';
import VisibleComment from '../containers/VisibleComment';

const Template = () => {
    return (
        <div>
            <CommentBox />
            <VisibleComment />
        </div>
    );
}

export default Template;