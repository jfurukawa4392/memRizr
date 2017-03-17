import { connect } from 'react-redux';
import Library from './library';
import {
  fetchSubjects,
  fetchSubject,
  createSubject
} from '../../actions/subject_actions';


const mapStateToProps = state => ({
  subjects: state.subjects,
  subjectDetail: state.activeSubject,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  getSubjects: (user) => dispatch(fetchSubjects(user)),
  getSubject: (id) => dispatch(fetchSubject(id)),
  createSubject: (subject) => dispatch(createSubject(subject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
