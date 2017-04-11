import React from 'react';
import { Link } from 'react-router';
import ProgressSidebar from './progress_sidebar';
import CardViewer from './card_viewer';

class DeckStudy extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentCard: 0,
      fetching: true
    };

    this.nextCard = this.nextCard.bind(this);
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeDeck.cards && nextProps.activeDeck.cards.length > 0){
      this.setState({
        fetching: false
      });
    }
  }

  componentWillUnmount(){
    this.props.removeDeck();
  }

  nextCard(){
    let { cardCount } = this.props.activeDeck;
    let randomNum = Math.floor(Math.random()*cardCount);

    while(randomNum === this.state.currentCard && cardCount > 1){
      randomNum = Math.floor(Math.random()*cardCount);
    }
    this.setState({
      currentCard: randomNum
    });
  }

  render(){
    let { cardCount, cards, title, subjectId } = this.props.activeDeck;

    return(
      <main className="outer-study-main">
        <ProgressSidebar
          cardCount={cardCount}
          cards={cards}
          title={title}
          subjectId={subjectId}
          fetching={this.state.fetching}/>
        <CardViewer
          card={cards[this.state.currentCard]}
          currentCardIndex={this.state.currentCard}
          createCardRating={this.props.createCardRating}
          nextCard={this.nextCard}
          fetching={this.state.fetching}/>
      </main>
    );
  }
}

export default DeckStudy;
