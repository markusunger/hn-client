import React from 'react';
import { getItemDetails } from '../helpers/api';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class StoryComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { kids: [] };
  }

  getComments() {
    const kidIds = this.props.item.kids;
    if (kidIds) {
      getItemDetails(kidIds)
        .then(kids => {
          this.setState({ kids });
        });
    }
  }

  getHTML() {
    return { __html: this.props.item.text };
  }

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.id !== prevProps.item.id) {
      this.getComments();
    }
  }

  render() {
    const { kids } = this.state;
    if (kids.length > 0) {
      return (
        <div style={{ marginLeft: (this.props.offset * 5) + 'px' }}>
          <p className="is-small">{this.props.item.by} | {formatDistanceToNow(new Date(this.props.item.time) * 1000)}</p>
          <p dangerouslySetInnerHTML={this.getHTML()} />
          {this.state.kids.map(kid => kid ? <StoryComments key={kid.id} item={kid} offset={this.props.offset + 1} /> : '')}
        </div>
      );
      } else {
        return (
          <div>
            <p dangerouslySetInnerHTML={this.getHTML()} />
          </div>
        )
      }
  }
}

export default StoryComments;
