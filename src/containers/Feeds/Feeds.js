import React, { Component, Fragment } from 'react';
import axios from '../../axios';
import { Route } from 'react-router-dom';

import classes from './Feeds.module.scss';
import Feed from '../../components/Feed/Feed';
import FullFeed from './FullFeed/FullFeed';

class Feeds extends Component {
  state = {
    feeds: [],
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const feeds = response.data.slice(0, 6);
        const updatedFeeds = feeds.map(feed => {
          return {
            ...feed
          }
        });
        this.setState({feeds: updatedFeeds});
      });
  }

  feedLinkHandler = (id) => {
    this.props.history.push({pathname: '/feeds/' + id});
  }

  render() {
    let feeds = <p className={classes.feedsError}>There is something wrong with the feeds that you fetch!!</p>;
    if(!this.state.error) {
      feeds = this.state.feeds.map(feed => {
        return (
          <Feed 
            key={feed.id}
            title={feed.title}
            content={feed.body}
            clicked={() => this.feedLinkHandler(feed.id)}
          />
        );
      });
    }
    return(
      <Fragment>
        <Route path={this.props.match.url + '/:id'} exact component={FullFeed} />
        <div className={classes.feeds}>
          {feeds}
        </div>
      </Fragment>
    );
  }
}

export default Feeds;