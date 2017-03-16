import { connect } from 'react-redux';
import SubjectIndex from './subject_index';
import { fetchSubjects, fetchSubject } from '../../actions/subject_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    subjects: state.subjects,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSubjects: (user) => dispatch(fetchSubjects(user)),
    getSubject: (id) => dispatch(fetchSubject(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
