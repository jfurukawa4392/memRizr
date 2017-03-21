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

    this.nextCard = this.nextCard.bind(this);
  }

  componentWillMount(){
    this.props.fetchDeck(this.props.deckId);
  }

  nextCard(){
    let { cardCount } = this.props.activeDeck;
    console.log(cardCount);
    let randomNum = Math.floor(Math.random()*cardCount);

    while(randomNum === this.state.currentCard){
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
          subjectId={subjectId}/>
        <CardViewer
          card={cards[this.state.currentCard]}
          currentCardIndex={this.state.currentCard}
          createCardRating={this.props.createCardRating}
          nextCard={this.nextCard}/>
      </main>
    );
  }
}

export default DeckStudy;
