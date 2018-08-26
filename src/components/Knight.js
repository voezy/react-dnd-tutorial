import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import { ItemTypes } from "../constants/dnd-types";

const KnightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <span
        style={{
          paddingLeft: "6px",
          opacity: isDragging ? 0.5 : 1,
          fontSize: 27,
          fontWeight: "bold",
          cursor: "move"
        }}
      >
        ♘
      </span>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, KnightSource, collect)(Knight);
