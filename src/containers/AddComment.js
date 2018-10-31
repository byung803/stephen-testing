import { connect } from 'react-redux';
import CommentBox from '../components/CommentBox';
import {saveComment} from '../actions'

export default connect(null, {saveComment})(CommentBox);