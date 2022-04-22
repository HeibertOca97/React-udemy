import React from 'react';
import {Button} from './Button';
import axios from 'axios'

axios.defaults.baseURL = 'https://reqres.in/api/';

interface IUserApi{
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface IUsersManagementState{
  userID: number;
  userData: Array<IUserApi>;
}

export class UsersManagement extends React.Component<{}, IUsersManagementState>{
  
  constructor(props: any){
    super(props);

    this.state = {
      userID: 1,
      userData: []
    }
  }
  
  getUser = (userID: number = 1) => {
    axios.get(`users/${userID}`)
    .then(response => {
      const getResponse = response.data;
      const userData = getResponse.data as IUserApi;
      this.setState(prevState => ({userData: prevState.userData.concat(userData)}));
    })
  }

  addUser = () => {
    this.setState(prevState => ({userID: prevState.userID < 9 ? prevState.userID + 1 : 10}));
    this.state.userID < 10 && this.getUser(this.state.userID+1);
  }

  removeUser = () => {
    this.setState(prevState => ({userID: prevState.userID > 1 ? prevState.userID - 1 : 1}));
    this.state.userID > 1 && this.setState(prevState => ({userData: prevState.userData.slice(0, this.state.userID - 1)}));    
  }

  getUserCardComponent = () => {
    return this.state.userData.length > 0 ? this.state.userData.map((item, index) => (
      <div className="card-user" key={index}>
        <div className="card-content">
          <picture className="picture">
            <img src={item.avatar} alt="Couldn't load image" />
          </picture>
          <div className="detail">
            <h3 className="detail-username">{item.first_name} {item.last_name}</h3>
            <p className="detail-email">{item.email}</p>
          </div>
        </div>
      </div>
    )) 
      : 
      <div className="card-user">
        <h3>Data user not found</h3>
      </div>
      ;
  }

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', ()=>this.getUser());
  }

  componentDidUpdate(){
    
  }

  componentWillUnmount(){
    document.removeEventListener('DOMContentLoaded', ()=>this.getUser());
  }

  render() {
    return (
      <>
        <h1>Users Management</h1>
        <Button 
          classes="primary" 
          description="Add" 
          handleClick={this.addUser}
        />
        <Button 
          classes= ''
          description="Remove" 
          handleClick={this.removeUser}
        />

      <section className="section">
        {this.getUserCardComponent()}
      </section>
    </>
  )
  }
}
