import React, { Component } from "react";
import "./components.css";
import { DragSource } from "react-dnd";

const cardSource = {
  beginDrag(props) {
    console.log("begin drag");
    return props.card;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    props.handleRemove(props.card.id, props.columnIndex);
    return console.log(monitor.getItem());
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
};

class Card extends Component {
  render() {
    const { isDragging, connectDragSource, card } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="Card" style={{ opacity }}>
        <p> {this.props.card.name} </p>
      </div>
    );
  }
}

export default DragSource("card", cardSource, collect)(Card);
