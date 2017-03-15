import React from 'react';

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
      <main className="home-outer">
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
      </main>
    );
  }
}

export default Home;