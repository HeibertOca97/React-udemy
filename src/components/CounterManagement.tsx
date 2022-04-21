import React from 'react';
import {ICounterManagementProps, ICounterManagementState, IUserDataAPI} from './interfaces';
import axios from 'axios';
import {UserCard} from './UserCard';

//<props, states>
export class CounterManagement extends React.Component<ICounterManagementProps, ICounterManagementState> {

  constructor(props: ICounterManagementProps){
    super(props);
    this.state = {
      counter: 1,
      userData: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        avatar: '',
      },
      userID: [],
    }
    console.log("constructor");
  }

  handleAddClick = () => { 
    this.setState((prevState)=> ({counter: prevState.counter < 10 ? prevState.counter + 1 : 10})); 
  }

  handleMinusClick = () => {
    this.setState((prevState)=> ({counter: prevState.counter > 1 ? prevState.counter - 1 : 1}));
  } 

  addUserData = () => {
    axios.get(`https://reqres.in/api/users/${this.state.counter}`)
    .then(response => {
      const userDataAPI = response.data as IUserDataAPI;
      const userData = userDataAPI.data;
      
      this.setState({userData});
      this.setState({userID: this.state.userID.concat(userData)});
    });
  }

  getUserData = () => {
    axios.get(`https://reqres.in/api/users/1`)
    .then(response => {
      const userDataAPI = response.data as IUserDataAPI;
      const userData = userDataAPI.data;
      this.setState({userData});
      this.setState({userID: this.state.userID.concat(userData)});
    });
  }

  deleteUserData = () => {
    if(this.state.userID.length > 1){
      this.setState(prevState => {
        return {
          userID: prevState.userID.slice(0, this.state.counter)
        }
      })
    }
  }

  addUserCard = () => {
    return this.state.userID.length > 0 ? this.state.userID.map((item, index) => (<UserCard data={item} key={index}/>)) : <h4>No hay datos que mostrar</h4>;
  }
  
  /****************
    LIFECYCLE METHODS 
  ***************/
  componentDidMount(){
    console.log("componentDidMount");
    this.getUserData();
  }

  //static getDerivedStateFromProps(props: ICounterManagementProps, state: ICounterManagementState){
    //console.log('getDerivedStateFromProps');
    //return null;
  //}

  shouldComponentUpdate(nextProps: ICounterManagementProps, nextState: ICounterManagementState){
    console.log('shouldComponentUpdate');
    return nextState.counter > 0 && nextState.counter < 11;
  }

  //getSnapshotBeforeUpdate(prevProps: ICounterManagementProps, prevState: ICounterManagementState){
    //console.log('getSnapshotBeforeUpdate');
    //return null;
  //}

  componentDidUpdate(prevProps: ICounterManagementProps, prevState: ICounterManagementState, snapshot: any){
    console.log('componentDidUpdate');
    if(prevState.counter < this.state.counter){
      this.addUserData();
    }
    if(prevState.counter > this.state.counter){
      this.deleteUserData();
    }
  }

  render() { 
    console.log("render");
    const {ownerName} = this.props;
    const {counter, userData} = this.state;
    const {first_name, last_name} = userData;

    return (
      <>
        <h1>Counter Management</h1>
        <p>Owner Name: {ownerName}</p>
        <p>Number of user: {counter}</p>
        <button onClick={this.handleAddClick}>add</button>
        <button onClick={this.handleMinusClick}>Remove</button>
        <p><strong>Current username:</strong> {first_name} {last_name}</p>
        <main style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {this.addUserCard()}
        </main>
      </>
    );
  }

}

