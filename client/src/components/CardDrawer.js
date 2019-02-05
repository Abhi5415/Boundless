import React, { Component } from "react";
import "./components.css";
import Card from "./Card";
import { DropTarget } from "react-dnd";

// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const drawerTarget = {
  drop(props, monitor) {
    props.handleAdd(monitor.getItem(), props.columnIndex);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
};

class CardDrawer extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    console.log(item);
    return connectDropTarget(
      <div className="Drawer">
        <h1> {this.props.column.name} </h1>
        {this.props.column.cards.map((card, cardIndex) => {
          return (
            <Card
              card={card}
              cardIndex={cardIndex}
              key={cardIndex}
              columnIndex={this.props.columnIndex}
              handleRemove={this.props.handleRemove}
            />
          );
        })}
      </div>
    );
  }
}
export default DropTarget("card", drawerTarget, collect)(CardDrawer);
