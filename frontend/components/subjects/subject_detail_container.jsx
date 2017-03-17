import { connect } from 'react-redux';
import SubjectDetail from './subject_detail';
import { fetchSubject } from '../../actions/subject_actions';

const mapStateToProps = ({ activeSubject, subjects }) => ({
  decks: activeSubject.decks,
  subjectDetail: activeSubject.subjectDetail,
});

const mapDispatchToProps = dispatch => ({
  fetchSubject: (id) => dispatch(fetchSubject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
