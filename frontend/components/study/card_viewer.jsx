import React from 'react';

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
    let { card } = this.props;
    let flipped = this.state.cardFlipped;
    let flippedClass = flipped ? "card-face-flipped" : "card-face-unflipped";
    let revealBarClass = flipped ? "reveal-card-btn" : "rate-card-btn";
    let inputBar;
    let cardFace;

    if(card){
      if(flipped){
        cardFace = <div className="card" >{card.answer}</div>;
        inputBar = <div>Rate me</div>;
      } else {
        cardFace = <div className="card" >{card.question}</div>;
        inputBar = <div onClick={() => this.toggleFlip()}>flip me</div>;
      }
    }


    return(
      <content className="card-study-outer">
        <header className="card-index-header">
          Card #{this.props.currentCardIndex + 1}
        </header>
        <main onClick={() => this.toggleFlip()} className={flippedClass}>
          {cardFace}
        </main>
        <div className="reveal-rate-btn">
          {inputBar}
        </div>
      </content>
    );
  }
}

export default CardViewer;
