import React from 'react';

class StoryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
    this.handleStoryListItemClick = this.handleStoryListItemClick.bind(this);
  }

  handleStoryListItemClick() {
    const id = this.itemRef.current.dataset.id;
    this.props.onStoryListItemClick(id);
  }

  render() {
    const { story } = this.props;

    let source = undefined;
    if (story.url) {
      const match = /\/\/(.*?)\//.exec(story.url);
      if (match) source = match[1];
    }

    return (
      <li>
        <div className="story-list-item-container" ref={this.itemRef} data-id={story.id} onClick={this.handleStoryListItemClick}>
          <div className="story-list-item-score">
            {story.score}
          </div>
          <div className="story-list-item-score">
            {story.descendants}
          </div>
          <div className="story-list-item-title">
            {story.title} <span className="story-list-item-source is-small">{source ? '(' + source + ')' : ''}</span>
          </div>
        </div>
      </li>
    )
  }
}

export default StoryListItem;