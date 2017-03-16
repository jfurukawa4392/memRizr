import { connect } from 'react-redux';
import FollowedSubjectIndex from './subject_index';
import { fetchSubjects } from '../actions/subject_actions';


const mapStateToProps = (state, ownProps) => ({
  subjects: state.subjects,
  subjectDetail: state.subjectDetail
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubjects: (user) => dispatch(fetchSubjects(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedSubjectIndex);
