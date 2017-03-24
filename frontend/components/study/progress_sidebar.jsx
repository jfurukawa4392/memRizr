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
    let newState = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    cards.forEach((card, idx) => {
      newState[card.rating] += 1;
    });

    return newState;
  }

  render(){
    let { title, subjectId, fetching, cardCount } = this.props;
    let stats = Math.floor(this.calculateMastery(this.props)*100);
    let buckets = this.calculateDistribution(this.props.cards);
    let numeratorClass = "level-1";

    if(stats >= 80) {
      numeratorClass = "level-5";
    } else if(stats >= 60) {
      numeratorClass = "level-4";
    } else if(stats >= 40) {
      numeratorClass = "level-3";
    } else if(stats >= 20){
      numeratorClass = "level-2";
    }

    let color;
    let bars = Object.keys(buckets).map((level, idx) => {
      switch(Number(level)){
        case(5):
          color = "#00A8D7";
          break;
        case(4):
          color = "#7FAE2E";
          break;
        case(3):
          color = "#FFDD00";
          break;
        case(2):
          color = "#FF8A47";
          break;
        case(1):
          color = "#AA0080";
          break;
        default:
          color = "#FEFEFE";
      }

      return(
        <div
          key={idx}>
          <span>{level}</span>
          <Line
            percent={(buckets[level]*100 / (cardCount === 0 ? 1 : cardCount))}
            strokeWidth="1"
            strokeColor={color}/>
        </div>
      );
    });

    bars = (
      <div
        className="card-buckets">
        {bars}
      </div>
    );

    let cardsMastered = (
      <div
        className="mastered-fraction-container">
        <div
          className={numeratorClass}>
          <p>{buckets[5]}</p> <small>Cards<br/>Mastered</small>
        </div>
        <strong>/</strong>
        <div
          className="denominator">
          <p>{this.props.cardCount}</p> <small>Total<br/>Cards</small>
        </div>
      </div>
    );

    return(
      <aside className="progress-sidebar-outer">
        <header className="deck-title-header">
          <span>
            Studying:<span>{title}</span>
          </span>
        </header>
        <Link to={fetching ? '/my-subjects' : `/my-subjects/${subjectId}`}>
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
        { fetching ? <div><p>Looking for cards...</p></div> : cardsMastered }
        { fetching ? <div></div> : bars }
      </aside>
    );
  }
}

export default ProgressSidebar;
