import { connect } from 'react-redux';
import CommentList from '../components/CommnetList';

const mapStateToProps = ({ comments }) => ({
    comments
});

export default connect(mapStateToProps)(CommentList);