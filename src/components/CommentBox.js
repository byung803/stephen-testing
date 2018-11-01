import React from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';

class CommentBox extends React.Component {
    state = { comment: '' }

    handleChange = (e) => {
        const comment = e.target.value;
        this.setState(() => ({ comment }))
    }

    render() {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(this.state.comment);
                this.props.saveComment(this.state.comment);
                this.setState({ comment: '' });

            }}>
                <textarea onChange={this.handleChange} cols="30" rows="10" value={this.state.comment} ></textarea>
                <div>
                    <button type="submit">Submit Text</button>
                </div>
            </form>

        )
    }
}

export default connect(null, { saveComment })(CommentBox)