import React from 'react';
import { Link } from 'react-router';
import ProgressSidebar from './progress_sidebar';
import CardViewer from './card_viewer';

class DeckStudy extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentCard: 0,
    };
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
  }

  render(){
    let { cardCount, cards, title } = this.props.activeDeck;
    return(
      <main className="outer-study-main">
        <ProgressSidebar
          cardCount={cardCount}
          cards={cards}
          title={title}
          lastSubject={this.props.lastSubject}/>
        <CardViewer
          card={cards[this.state.currentCard]}
          currentCardIndex={this.state.currentCard}
          createCardRating={this.props.createCardRating}/>
      </main>
    );
  }
}

export default DeckStudy;
