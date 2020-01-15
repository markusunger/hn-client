import React from 'react';

class StoryTypeSelector extends React.Component {
  constructor(props) {
    super(props);

    this.handleTypeClick = this.handleTypeClick.bind(this);
  }

  handleTypeClick(e) {
    e.preventDefault();
    console.log(e.target.dataset.type);
    this.props.onTypeChange(e.target.dataset.type);
  }

  render() {
    const type = this.props.storyType;

    return (
      <div className="story-type-container">
          <a onClick={this.handleTypeClick} data-type="topstories" className={type === 'topstories' ? 'story-type-selected' : ''}>Top</a>
          <a onClick={this.handleTypeClick} data-type="beststories" className={type === 'beststories' ? 'story-type-selected' : ''}>Best</a>
          <a onClick={this.handleTypeClick} data-type="newstories" className={type === 'newstories' ? 'story-type-selected' : ''}>New</a>
      </div>
    )
  }

}

export default StoryTypeSelector;
