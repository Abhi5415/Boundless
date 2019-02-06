import React, { Component } from "react";
import CardDrawer from "./CardDrawer";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import AddCardForm from "./AddCardForm";
import CardTray from "./CardTray";
import CreateColumn from "./CreateColumn";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1321",
      columns: [
        {
          id: "1234",
          name: "Test",
          cards: [{ id: "card1", name: "test" }, { id: "card2", name: "test2" }]
        },
        {
          id: "4122",
          name: "Test2",
          cards: [{ id: "card3", name: "test" }, { id: "card4", name: "test4" }]
        }
      ],
      tray: {
        id: "123122",
        name: "TRAY",
        cards: [{ id: "card5", name: "test" }, { id: "card5", name: "test6" }]
      }
    };
  }

  // addNewCard ()

  removeCard = (id, columnIndex) => {
    this.setState(prevState => {
      const card = prevState.columns[columnIndex].cards.findIndex(
        card => card.id == id
      );
      prevState.columns[columnIndex].cards.splice(card, 1);
      return prevState;
    });
  };

  removeCardFromTray = id => {
    this.setState(prevState => {
      const card = prevState.tray.cards.findIndex(card => card.id == id);
      prevState.tray.cards.splice(card, 1);
      return prevState;
    });
  };

  addCard = (card, columnIndex) => {
    this.setState(prevState => {
      prevState.columns[columnIndex].cards.push(card);
      return prevState;
    });
  };

  addCardToTray = card => {
    this.setState(prevState => {
      prevState.tray.cards.push(card);
      return prevState;
    });
  };

  addColumn = name => {
    const newColumn = {
      id: "",
      name: name,
      cards: []
    };
    console.log(newColumn);
    this.setState(prevState => {
      prevState.columns.push(newColumn);
      return prevState;
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => {
          return (
            <CardDrawer
              column={column}
              columnIndex={columnIndex}
              key={columnIndex}
              handleRemove={this.removeCard}
              handleAdd={this.addCard}
            />
          );
        })}

        <AddCardForm handleAdd={this.addCardToTray} />
        <CardTray
          column={this.state.tray}
          columnIndex={2}
          key={2}
          handleRemove={this.removeCardFromTray}
          handleAdd={this.addCardToTray}
        />
        <CreateColumn handleAdd={this.addColumn} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
