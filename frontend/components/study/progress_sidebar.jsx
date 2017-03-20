import React from 'react';
import { Link } from 'react-router';

class ProgressSidebar extends React.Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    let mastery = this.calculateMastery();
  }

  calculateMastery(){
    let { cardCount, cards } = this.props;
    let rawScore = 0;
    cards.forEach((card) => {
      rawScore += parseInt(card.currentRating);
    });
    return (rawScore/(5*cardCount)).toFixed(2);
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
          <span>
            Studying:<span>{title}</span>
          </span>
        </header>
        <Link to={`/my-subjects/`}>
          <div className="progress-nav-buttons">
            Done
          </div>
        </Link>
        <figure className="progress-stats">
          {`${stats}%`}
        </figure>
      </aside>
    );
  }
}

export default ProgressSidebar;
