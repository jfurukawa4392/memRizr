import { connect } from 'react-redux';
import SubjectDetail from './subject_detail';
import {
  fetchSubject,
  createFollow,
  deleteFollow
} from '../../actions/subject_actions';
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
  deleteDeck: (deckId) => dispatch(deleteDeck(deckId)),
  createFollow: (subjectId) => dispatch(createFollow(subjectId)),
  deleteFollow: (subjectId) => dispatch(deleteFollow(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectDetail);
