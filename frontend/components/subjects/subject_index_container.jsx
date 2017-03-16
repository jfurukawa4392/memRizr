import { connect } from 'react-redux';
import FollowedSubjectIndex from './subject_index';
import { fetchSubjects, fetchSubject } from '../actions/subject_actions';


const mapStateToProps = (state, ownProps) => ({
  subjects: state.subjects.titles,
  activeSubject: state.activeSubject,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubjects: (user) => dispatch(fetchSubjects(user)),
    getSubject: (id) => dispatch(fetchSubject(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowedSubjectIndex);
