import React from 'react'
import {IUserDataAPI} from './interfaces'


export class UserCard extends React.Component<IUserDataAPI, {}>{

  constructor(props: IUserDataAPI){
    super(props);
  }

  styleContainer = {
    width: '250px',
    boxShadow: '0px 5px 8px rgba(0,0,0,.3)',
    borderRadius: '5px',
    margin: '10px',
    padding: '5px'
  }

  styleDiv = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }

  styleImg ={
    maxWidth: '60px',
    width: '25%',
    height: '60px',
    borderRadius: '5px',
  }

  styleH3 = {
    width: '75%',
    textAlign: 'center' as const,
    color: 'blue'
  }

  render() {
    const {data} = this.props;
    return (
      <div style={this.styleContainer} >
        <div style={this.styleDiv}>
          <img style={this.styleImg} src={data.avatar} alt="" />
          <h3 style={this.styleH3}>{data.first_name} {data.last_name}</h3>
        </div>
        <p><strong>Email: </strong> {data.email}</p>
      </div>

    );
  }
}
