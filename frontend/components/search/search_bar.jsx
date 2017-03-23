import React from 'react';
import { Link } from 'react-router';
import * as APIUtil from '../../util/main_api_util';

class SearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      query: "",
      results: {}
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  submitSearch(){
    this.props.fetchResults(this.state.query);
    this.setState({
      query: "",
      results: {}
    });
  }

  handleUpdate(e){

    let query = e.target.value;

    this.setState({
      query
    });

    if(query.trim() === ""){
      APIUtil.fetchAllSubjects()
             .then(results => this.setState({
               results
             }));
    } else {
      this.props.fetchFastResults(query)
      .then(results => this.setState({
        results
      }));
    }
  }

  render(){
    let resultList = Object.keys(this.state.results).map((resultId) => (
        this.state.results.resultId.title
    ));

    return(
      <div className="search-bar-outer">
        <form onSubmit={() => this.submitSearch()}>
          <input
            type="text"
            value={this.state.query}
            onChange={(e) => this.handleUpdate(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
