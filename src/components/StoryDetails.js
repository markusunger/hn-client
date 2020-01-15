import React from 'react';
import { getStoryDetail, getStoryDetails } from '../helpers/api';

class StoryDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedStory && prevProps.selectedStory !== this.props.selectedStory) {
      
    }
  }

  render() {
    if (this.props.selectedStory) {
      const story = this.props.selectedStory;

      return (
        <section className="story-details">
          <h1>{story.title}</h1>
        </section>
      );
    } else {
      return (
        <section className="story-details-empty">
          <div>Select an item from the left</div>
        </section>
      )
    }
  }
}

export default StoryDetails;
