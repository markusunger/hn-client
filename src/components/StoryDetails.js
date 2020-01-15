import React from 'react';
import { getStoryDetail, getStoryDetails } from '../helpers/api';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import StoryLink from './StoryLink';
import StoryText from './StoryText';

class StoryDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  render() {
    const story = this.props.selectedStory;

    if (story) {
      console.log(story);
      const time = formatDistanceToNow(new Date(story.time * 1000));

      return (
        <section className="story-details">
          <h2>{story.title}</h2>
          <div className="story-detail-info">
            <p>from {story.by} {time} ago, {story.score} points | {story.descendants} comments</p>
          </div>
          {story.text ? <StoryText text={story.text} /> : <StoryLink link={story.url} />}
        </section>
      );
    } else {
      return (
        <section className="story-details-empty">
          <div>Select an item from the left</div>
        </section>
      );
    }
  }
}

export default StoryDetails;
