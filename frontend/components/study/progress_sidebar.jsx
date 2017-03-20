import React from 'react';
import { Link } from 'react-router';

class ProgressSidebar extends React.Component{
  constructor(props){
    super(props);

  }

  calculateMastery(){
    let { cardCount, cards } = this.props;
    let rawScore = 0;
    cards.forEach((card) => {
      rawScore += parseInt(card.currentRating.rating);
      console.log(card.currentRating.rating);
    });
    return parseFloat(rawScore/(5*cardCount));
  }

  render(){
    let { title, lastSubject } = this.props;
    let stats;
    if(this.props.cards){
      stats = this.calculateMastery()*100;
    }
    return(
      <aside className="progress-sidebar-outer">
        <header className="deck-title-header">
          Studying: {title}
        </header>
        <div className="progress-nav-buttons">
          <Link to={`/my-subjects/${lastSubject}`}>
            Done
          </Link>
        </div>
        <content className="progress-stats">
          {`${stats}%`}
        </content>
      </aside>
    );
  }
}

export default ProgressSidebar;
