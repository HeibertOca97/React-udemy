import React from 'react';
import './App.css';
import {FirstComponent} from './components/FirstComponent'; 
import {ErrorComponent} from './components/ErrorComponent';

interface IAppProps {}

interface IAppState {
  hasError: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error: Error){
    console.log('getDerivedStateFromError', error);

    return {
      hasError: true
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo){
    console.log('componentDidCatch', error);
    console.log('componentDidCatch', info);

    this.setState({
      hasError: true
    });
  }

  render() {
    return (
      <>
        <h1>My App</h1>
        {this.state.hasError ? <ErrorComponent /> : <FirstComponent />}
      </>
    );
  }
}

export default App;
