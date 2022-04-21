import React from 'react';
//import {Button} from './components/Button';
import {CounterManagement} from './components/CounterManagement';

class App extends React.Component{
  render(){
    return (
      <>
        <h1>My App</h1>
        <CounterManagement ownerName="Heibert" />
      </>
    );
  } 

}

export default App;
