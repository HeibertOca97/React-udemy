import React from 'react';
import {ICounterManagementProps, ICounterManagementState} from './interfaces';
import axios from 'axios';

//<props, states>
export class CounterManagement extends React.Component<ICounterManagementProps, ICounterManagementState> {

  constructor(props: ICounterManagementProps){
    super(props);
    this.state = {
      counter: 0,
      users: [],
    }
    console.log("constructor");
  }

  static getDerivedStateFromProps(props: ICounterManagementProps, state: ICounterManagementState){
    console.log('getDerivedStateFromProps');

    return null;
  }

  componentDidMount(){
    axios.get('https://reqres.in/api/users?page=2')
    .then(response => {
      const data = response.data;
      const users = data.data.map((user:any) => user.first_name);
      this.setState({users});
    });


    window.addEventListener('click', this.clickWindow);
  };

  componentWillUnmount(){
    window.removeEventListener('click', this.clickWindow);
  }
  
  clickWindow = () => {
    console.log('clickWindow Event occur');
    this.setState({counter: this.state.counter + 1});
  }

  handleAddClick = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1};
    });
  }

  handleMinusClick = () => {
    this.setState(prevState => {
      return {counter: prevState.counter - 1}
    });
  }
  
  render() { 
    console.log("render");

    const {ownerName} = this.props;
    const {counter, users} = this.state;

    return (
      <>
        <h1>Counter Management</h1>
        <p>Owner Name: {ownerName}</p>
        <p>Counter: {counter}</p>
        <button onClick={this.handleAddClick}>add</button>
        <button onClick={this.handleMinusClick}>Minus</button>
        <ul>
          {users.map((user, index) => <li key={index}>{user}</li>)}
        </ul>
      </>
    );
  }

}

