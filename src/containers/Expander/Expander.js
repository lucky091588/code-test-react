import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Expander.module.scss';
import ExpanderItem from '../../components/ExpanderItem/ExpanderItem';

class Expander extends Component {
  state = {
    feeds: [],
    activeItem: null,
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const feeds = response.data.slice(0, 10);
        const updatedFeeds = feeds.map(feed => {
          return {
            ...feed
          }
        });
        this.setState({feeds: updatedFeeds});
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  activeItemHandler = (id) => {
    this.setState({activeItem: id});
  }

  render() {
    let feeds = <p className={classes.feedsError}>There is something wrong with the feeds that you fetch!!</p>;
    if(!this.state.error) {
      feeds = this.state.feeds.map(feed => {
        return (
          <ExpanderItem
            key={feed.id}
            id={feed.id}
            title={feed.title}
            content={feed.body}
            activeItem={this.state.activeItem}
            clicked={() => this.activeItemHandler(feed.id)}
          />
        );
      });
    }

    return(
       <div className={classes.expander}>
         <div className={classes.expanderList}>
           {feeds}
         </div>
       </div>
    );
  }
}

export default Expander;