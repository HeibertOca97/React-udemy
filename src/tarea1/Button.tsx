import React from 'react';
import '../index.css';

interface IButtonProps{
  classes?: string;
  description: string;
  handleClick?: any;
}

export class Button extends React.Component<IButtonProps, {}>{

  constructor(props: IButtonProps){
    super(props);
  }
  
  getTypeClassName = () => {
    const {classes} = this.props;
    return classes === 'primary' ? 'primary' : 'default';
  }

  render(){

    const {description} = this.props;

    return (
      <button 
        className={this.getTypeClassName().concat(' btn')}
        onClick={this.props.handleClick}
        >{description}</button>
    )
  }

}
