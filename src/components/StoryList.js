import React from 'react';
import StoryListItem from './StoryListItem';
import StoryTypeSelector from './StoryTypeSelector';

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };

    this.handleMoreClick = this.handleMoreClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stories.length !== prevProps.stories.length) {
      this.setState({ isLoading: false });
    }
  }

  handleMoreClick(e) {
    e.preventDefault();
    this.props.loadMore();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading stories ...</p>
    } else {
      const { stories } = this.props;

      return (
        <aside className="story-list">

          <StoryTypeSelector
            storyType={this.props.storyType}
            onTypeChange={this.props.onTypeChange}
          />

          <ul>
            <li key={Date.now()}>
              <div className="story-list-item-container">
                <div className="story-list-item-score is-small">Points</div>
                <div className="story-list-item-score is-small">Comments</div>
                <div className="story-list-item-title">&nbsp;</div>
              </div>
            </li>
            {stories.map(story => <StoryListItem key={story.id} story={story} onStoryListItemClick={this.props.onStoryListItemClick} />)}
          </ul>

          <div className="load-more">
            <a href="#" onClick={this.handleMoreClick}>Load more</a>
          </div>
        </aside>
      );
    }
  }
}

export default StoryList;