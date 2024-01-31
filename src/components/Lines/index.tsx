import React from 'react';
import useStyles from './styles';

const Line = () => {
  const classes = useStyles();

  return <div className={classes.lineStyle} />;
};

export default Line;
