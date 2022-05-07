import React from "react";

export class SecondComponent extends React.Component {

  render() {
    throw new Error("Planned errorHandling");
    return (
      <>
        <h2>Second Component</h2>
      </>
    );
  }
}
