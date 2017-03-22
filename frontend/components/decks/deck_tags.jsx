import React from 'react';

class DeckTags extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      newTag: "",
      showTagForm: false
    };
  }

  toggleShowTagForm(){
    this.setState({
      showTagForm: !this.state.showTagForm
    });
  }

  handleNewTag(e){
    e.preventDefault();
    console.log(e.target);
    this.setState({
      newTag: e.target.value
    });
  }

  submitTag(e){
    e.preventDefault();

    let tagging = {
      deck_id: this.props.deckId,
      tag: this.state.newTag
    };
    this.props.createTagging(tagging);
    this.setState({
      newTag: ""
    });
  }

  handleDelete(tagId){
    let tag = {
      deck_id: this.props.deckId,
      id: tagId
    };

    this.props.deleteTagging(tag);
  }

  render(){
    let { tags } = this.props;
    let tagItems = <div></div>;

    if(tags){
      tagItems = tags.map((tag, idx) => (
      <div
        key={idx}
        className="deck-tag">
        <button
          className="tag-delete-btn">
          <i
            className="fa fa-hashtag"
            onClick={() => this.handleDelete(tag.id)}>
          </i>
        </button>
        {tag.tag_name}
      </div>
    ));
    }

    let tagForm = (
      <form
        onSubmit={(e) => this.submitTag(e)}>
        <input
          type="text"
          onChange={(e) => this.handleNewTag(e)}
          value={this.state.newTag}/>
        <input
          type="submit"
          className="tag-form-btn"/>
        <button
          className="tag-form-btn"
          onClick={() => this.toggleShowTagForm()}>
          Cancel
        </button>
      </form>
    );

    return(
      <div className="tags">
        Tags
        {tagItems}
        {this.state.showTagForm ? tagForm : <button onClick={() => this.toggleShowTagForm()}>Add Tag</button>}
      </div>
    );
  }
}

export default DeckTags;
