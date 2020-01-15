import React from 'react';
import { render } from 'react-dom';
import StoryList from './StoryList';
import StoryDetails from './StoryDetails';
import Header from './Header';
import { getStories } from '../helpers/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedStory: undefined,
      stories: [],
      storyType: 'topstories',
      isLoading: true,
      offset: 0,
    }

    this.onStoryListItemClick = this.onStoryListItemClick.bind(this);
    this.onTypeChange = this.onTypeChange.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    getStories(this.state.storyType, this.state.offset)
      .then((stories) => {
        this.setState({
          stories,
          isLoading: false,
        });
      });
  }


  onStoryListItemClick(storyId) {
    const selectedStory = this.state.stories.find(story => story.id === Number(storyId));
    this.setState({ selectedStory });
  }

  onTypeChange(newType) {
    this.setState({ isLoading: true });
    getStories(newType, 0)
      .then((stories) => {
        this.setState({
          stories,
          storyType: newType,
          offset: 0,
          isLoading: false,
        });
      });
  }

  loadMore() {
    const newOffset = this.state.offset + 11;
    if (newOffset <= 490) {
      this.setState({ 
        offset: newOffset,
        isLoading: true
      });
      const { stories } = this.state;
      getStories(this.state.storyType, newOffset)
        .then(newStories => {
          this.setState({
            stories: stories.concat(newStories),
            isLoading: false,
          });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="wrapper">
          <StoryList
            stories={this.state.stories}
            storyType={this.state.storyType}
            onTypeChange={this.onTypeChange}
            onStoryListItemClick={this.onStoryListItemClick}
            loadMore={this.loadMore}
          />

          <StoryDetails 
            selectedStory={this.state.selectedStory}
          />
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('app-root'));
