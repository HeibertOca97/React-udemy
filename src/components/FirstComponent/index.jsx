import React, {ErrorInfo} from "react";
//import {ErrorComponent} from "../ErrorComponent";
import {SecondComponent} from '../SecondComponent';
import {IFirstComponentProps, IFirstComponentState} from './interface';

export class FirstComponent extends React.Component<IFirstComponentProps, IFirstComponentState> {
  

  render() {
    return (
      <>
        <h2>First Component</h2>
        <SecondComponent />
      </>
    );
  }
}
