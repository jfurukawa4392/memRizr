import React from 'react';
import NavBarContainer from './navbar_container';
import { Link } from 'react-router';

class Home extends React.Component{

  render(){
    return (
      <div>
        <NavBarContainer />
        <main className="home-outer">
          <div className="contrast-block"></div>
          <content className="home-inner">
            <section className="greetHeader">
              <h1>Keep your memory sharp</h1>
              <Link
                to='/browse'
                className="browse-cards-link">
                <h3>
                  Browse available flashcards here
                </h3>
              </Link>
            </section>
          </content>
        </main>
      </div>
    );
  }
}

export default Home;
