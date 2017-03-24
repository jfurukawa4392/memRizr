import React from 'react';
import NavBarContainer from './navbar_container';
import { Link } from 'react-router';

class Home extends React.Component{

  constructor(){
    super();
    this.state = {searchString: ""};
  }

  handleSubmit(){
    //temporary no-op function until search is implemented
    this.setState(this.state);
  }

  handleChange(){
    this.setState(this.state);
  }

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
                to='/browse'>
                <h3>
                  Search available flashcards
                </h3>
              </Link>
            </section>
            <form className="search"
              onSubmit={this.handleSubmit}>
              <input type="text"
                onChange={this.handleChange}
                value={this.state.searchString}
                className="search-input"/>
              <input type="submit"
                value="Search"
                className="search-button"/>
            </form>
          </content>
        </main>
      </div>
    );
  }
}

export default Home;
