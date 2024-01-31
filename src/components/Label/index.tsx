import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

export type Icolor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'draft'
  | 'info'
  | 'approved'
  | 'waitApproved'
  | 'disapproved';

interface Props {
  children: React.ReactNode;
  color: Icolor;
}

export const Label = ({ children, color = 'secondary' }: Props) => {
  const classes = useStyles();
  return <span className={clsx([classes[color]])}>{children}</span>;
};

export default Label;
