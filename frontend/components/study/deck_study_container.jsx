import { connect } from 'react-redux';
import DeckStudy from './deck_study';
import { fetchDeck, createCardRating } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.params.deckId,
  activeDeck: state.activeDeck,
  otherDecks: state.activeSubject.decks
});

const mapDispatchToProps = (dispatch) => ({
  fetchDeck: (id) => dispatch(fetchDeck(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckStudy);
