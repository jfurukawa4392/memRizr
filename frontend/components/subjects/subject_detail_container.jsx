import { connect } from 'react-redux';
import SubjectDetail from './subject_detail';
import { fetchSubject } from '../../actions/subject_actions';
import { createDeck, deleteDeck } from '../../actions/deck_actions';

const mapStateToProps = ({ activeSubject, session, subjects }) => ({
  decks: activeSubject.decks,
  subjectDetail: activeSubject.subjectDetail,
  currentUser: session.currentUser,
  subjects
});

const mapDispatchToProps = dispatch => ({
  fetchSubject: (id) => dispatch(fetchSubject(id)),
  createDeck: (deck) => dispatch(createDeck(deck)),
  deleteDeck: (deckId) => dispatch(deleteDeck(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
