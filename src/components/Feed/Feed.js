import React from 'react';

import classes from './Feed.module.scss';

const feed = (props) => {
  return(
    <div className={classes.feed}>
      <article className={classes.feedArticle} onClick={props.clicked}>
        <h2>{props.title}</h2>
        <p>{props.content.substring(0,30)}...</p>
      </article>
    </div>
  );
}

export default feed;