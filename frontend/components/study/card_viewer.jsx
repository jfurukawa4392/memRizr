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
    let flipped = this.state.cardFlipped;
    let flippedClass = flipped ? "card-face flipped" : "card-face unflipped";
    let revealBar = flipped ? "reveal-card-btn" : "rate-card-btn";
    return(
      <content className="card-study-outer">
        <header className="card-index-header">
          Card #{this.props.currentCardIndex + 1}
        </header>
        <main className={flippedClass}>

        </main>
        <div className>

        </div>
      </content>
    );
  }
}

export default CardViewer;
