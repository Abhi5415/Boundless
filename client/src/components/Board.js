import React, { Component } from "react";
import CardDrawer from "./CardDrawer";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1321",
      columns: [
        {
          id: "1234",
          name: "Test",
          cards: [{ id: "1342", name: "test" }, { id: "1232", name: "test2" }]
        },
        {
          id: "4122",
          name: "Test2",
          cards: [{ id: "1342", name: "test" }, { id: "1232", name: "test2" }]
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => {
          return (
            <CardDrawer
              column={column}
              columnIndex={columnIndex}
              key={columnIndex}
            />
          );
        })}
      </div>
    );
  }
}
