import { connect } from 'react-redux';
import BrowseSubjects from './browse_subjects';
import {
  fetchSubjects,
} from '../../actions/subject_actions';

const mapStateToProps = (state) => ({
  subjects: state.subjects,
  loggedIn: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchSubjects: () => dispatch(fetchSubjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseSubjects);
