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

    if(query.trim().length > 2){
      APIUtil.requestResults(query)
             .then(results => this.setState({
                results
              }));
    } 
  }

  render(){
    let resultKeys = Object.keys(this.state.results);
    let resultList = [];
    let key;
    for (var i = 0; i < resultKeys.length; i++) {
      key = resultKeys[i];
      resultList.push(
        <Link
          to={`/browse/${key}`}
          className="result-item"
          key={i}>
          <li>
            {this.state.results[key].title}
          </li>
        </Link>
      );
    }

    return(
      <div className="search-bar-outer">
        <div
          className="search-bar-header-wrapper">
          <div
            className="search-bar-head">
            <i className="fa fa-search fa-lg"></i>
            <input
              type="text"
              value={this.state.query}
              placeholder="Search all subjects"
              className="search-input-field"
              onChange={(e) => this.handleUpdate(e)} />
            <button
              className="submit-search-btn"
              onClick={() => this.submitSearch()}>
              Search
            </button>
            <div
              className="results-list-wrapper">
              <ul
                className="search-results-list">
                {resultList}
              </ul>
            </div>
          </div>
        </div>
        <aside
          className="search-bar-side">
          <article>
            <h1>
              The secret to getting ahead is getting started. Time to memRize!
            </h1>
          </article>
        </aside>
      </div>
    );
  }
}

export default SearchBar;
