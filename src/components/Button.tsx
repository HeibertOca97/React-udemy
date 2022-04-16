import React from 'react';
import {IButtonProps} from './interfaces';
import '../index.css';

export const Button: React.FC<IButtonProps> = ({type="default"}) => {
  let  className = type === 'primary' ? 'primary' : '';
  return (
    <button className={className}>Button props</button>
  );
}
