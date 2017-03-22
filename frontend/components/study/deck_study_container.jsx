import { connect } from 'react-redux';
import DeckStudy from './deck_study';
import { fetchDeck,
         createCardRating,
         removeDeck
       } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  deckId: ownProps.params.deckId,
  activeDeck: state.activeDeck,
  otherDecks: state.activeSubject.decks
});

const mapDispatchToProps = (dispatch) => ({
  fetchDeck: (id) => dispatch(fetchDeck(id)),
  createCardRating: (rating) => dispatch(createCardRating(rating)),
  removeDeck: () => dispatch(removeDeck()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckStudy);
