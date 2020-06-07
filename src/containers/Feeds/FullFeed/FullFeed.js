import React, { Component } from 'react';
import axios from '../../../axios';

import classes from './FullFeed.module.scss';

class FullFeed extends Component {
  state = {
    loadedFeed: null,
  }

  componentDidMount(prevProps) {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    this.loadData();
  }

  loadData() {
    if(this.props.match.params.id) {
      if(!this.state.loadedFeed || (this.state.loadedFeed && this.state.loadedFeed.id !== +this.props.match.params.id) ) {
        axios.get('/posts/' + this.props.match.params.id)
        .then(response => {
            this.setState({loadedFeed: response.data});
        });
      }
    }
  }

  render() {
    let feed = <p></p>;
    
    if(this.props.match.params.id){
        feed = <p className={classes.loader}>Loading...!</p>;
    }

    if(this.state.loadedFeed) {
        feed = (
          <div className={classes.fullFeed}>
            <h2>{this.state.loadedFeed.title}</h2>
            <p>{this.state.loadedFeed.body}</p>
          </div>
        );
    }

    return feed;
  }
}

export default FullFeed;