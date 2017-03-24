import React from 'react';
import { Link } from 'react-router';
import { Line, Circle } from 'rc-progress';

class ProgressSidebar extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  componentWillReceiveProps(nextProps){
  }

  calculateMastery(props){
    let { cardCount, cards } = props;
    let rawScore = 0;
    cards.forEach((card) => {
      rawScore += parseInt(card.rating);
    });
    return (rawScore/(5*cardCount));
  }

  calculateDistribution(cards){
    let scores = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    cards.forEach((card, idx) => {

    });
  }

  render(){
    let { title, subjectId } = this.props;
    let stats = Math.floor(this.calculateMastery(this.props)*100);
    let cardBuckets =
    // <Circle percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
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
        <Circle percent={`${stats}`} strokeWidth="4" strokeColor="#40B8DA" />
        <figure className="progress-stats">
          {`${stats}%`}
        </figure>
      </aside>
    );
  }
}

export default ProgressSidebar;
