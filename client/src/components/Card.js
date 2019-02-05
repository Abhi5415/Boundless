import React, { Component } from "react";
import "./components.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <p> {this.props.card.name} </p>
      </div>
    );
  }
}
