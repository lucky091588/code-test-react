import React, { useRef } from 'react';

import classes from './ExpanderItem.module.scss';

const ExpanderItem = (props) => {
  const expanderItemHeight = useRef(0);
  const currentItemHeight = expanderItemHeight.current.clientHeight + 20;

  return(
    <div 
      className={[props.activeItem === props.id && classes.isActive, classes.expanderItem].join(' ')}
      onClick={props.clicked}
    >
      <div className={classes.expanderHead}>
        <h2>{props.title}</h2>
      </div>
      <div 
        style={props.activeItem === props.id ? {height: `${currentItemHeight}px`} : {height: 0}}
        className={classes.expanderBody}
      >
        <p ref={expanderItemHeight}>{props.content}</p>
      </div>
    </div>
  )
}

export default ExpanderItem;