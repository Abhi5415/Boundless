import React, { Component } from "react";
import "./components.css";
import Card from "./Card";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class CardDrawer extends Component {
  render() {
    return (
      <div className="Drawer">
        <h1> {this.props.column.name} </h1>
        {this.props.column.cards.map((card, cardIndex) => {
          return <Card card={card} cardIndex={cardIndex} key={cardIndex} />;
        })}
      </div>
    );
  }
}
