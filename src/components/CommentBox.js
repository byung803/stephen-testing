import React from 'react';

const CommentBox = (props) => {
    let input;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.saveComment(input.value);
            input.value = '';
        }}>
            <textarea cols="30" rows="10" ref={node => (input = node)}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CommentBox;