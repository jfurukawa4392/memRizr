import { connect } from 'react-redux';
import SubjectDetail from './subject_detail';
import { fetchSubject } from '../../actions/subject_actions';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ activeSubject, subjects, currentUser }) => ({
  decks: activeSubject.decks,
  subjectDetail: activeSubject.subjectDetail,
  currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchSubject: (id) => dispatch(fetchSubject(id)),
  createDeck: (deck) => dispatch(createDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
