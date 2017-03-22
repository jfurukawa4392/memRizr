import React from 'react';
import { Link } from 'react-router';

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

  render(){
    let { title, subjectId } = this.props;
    let stats = this.calculateMastery(this.props);

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
        <figure className="progress-stats">
          {`${Math.floor(stats*100)}%`}
        </figure>
      </aside>
    );
  }
}

export default ProgressSidebar;
