import React from 'react';
import { Link } from 'react-router';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query: ""
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  submitSearch(){
    this.props.fetchResults(this.state.query);
  }

  handleUpdate(){
    return (e) => this.setState({
      query: e.target.value
    });
  }

  render(){
    let { fetchResults, results } = this.props;

    return(
      <div className="search-bar-outer">
        <form onSubmit={() => this.submitSearch()}>
          <input type="text" value={this.state.query} onChange={this.handleUpdate} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
