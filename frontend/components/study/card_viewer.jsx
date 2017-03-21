import React from 'react';
import CardFace from './card_face';
import RevealRateButton from './reveal_rate_button';

class CardViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cardFlipped: false,
    };

    this.toggleFlip = this.toggleFlip.bind(this);
  }

  toggleFlip(){
    this.setState({
        cardFlipped: !this.state.cardFlipped
    });
  }

  render(){
    let { card, createCardRating, nextCard } = this.props;
    let flipped = this.state.cardFlipped;

    return(
      <content className="card-study-outer">
        <header className="card-index-header">
          Card #{this.props.currentCardIndex + 1}
        </header>
        <CardFace
          toggleFlip={this.toggleFlip}
          flipped={this.state.cardFlipped}
          card={card}/>
        <RevealRateButton
          toggleFlip={this.toggleFlip}
          flipped={this.state.cardFlipped}
          card={card}
          createCardRating={createCardRating}
          nextCard={nextCard}/>
      </content>
    );
  }
}

export default CardViewer;
