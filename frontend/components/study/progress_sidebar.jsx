import React from 'react';
import { Link } from 'react-router';
import { Line, Circle } from 'rc-progress';
import * as _ from 'lodash';

class ProgressSidebar extends React.Component{
  constructor(props){
    super(props);
  }

  calculateMastery(props){
    let { cardCount, cards } = props;
    let rawScore = 0;
    let mastery;
    cards.forEach((card) => {
      rawScore += parseInt(card.rating);
    });

    mastery = (rawScore/(5*cardCount));
    return isNaN(mastery) ? 0 : mastery;
  }

  calculateDistribution(cards){
    let newState = { scores: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }};
    let mastered = 0;
    cards.forEach((card, idx) => {
      newState[card.rating] += 1;
      if(card.rating === 5){
        mastered += 1;
      }
    });

    newState.mastered = mastered;
    return newState;
  }

  render(){
    let { title, subjectId, fetching } = this.props;
    let stats = Math.floor(this.calculateMastery(this.props)*100);
    let buckets = this.calculateDistribution(this.props.cards);
    let cardsMastered = (
      <div
        className="mastered-fraction-container">
        <p>{buckets.mastered}</p> <small>Cards<br/>Mastered</small><strong>/</strong> <p>{this.props.cardCount}</p> <small>Total<br/>Cards</small>
      </div>
    );

    return(
      <aside className="progress-sidebar-outer">
        <header className="deck-title-header">
          <span>
            Studying:<span>{title}</span>
          </span>
        </header>
        <Link to={`/my-subjects/${subjectId}`}>
          <div className="progress-nav-buttons">
            Done
          </div>
        </Link>
        <Circle
          percent={fetching ? '0' : `${stats}`}
          strokeWidth="4"
          className="progess-circle-figure"
          strokeColor="#40B8DA"/>
        <figure className="progress-stats">
          {fetching ? '0%' : `${stats}%`}
        </figure>
        { fetching ? <div><p>Looking for cards...</p></div> : cardsMastered}
      </aside>
    );
  }
}

export default ProgressSidebar;
