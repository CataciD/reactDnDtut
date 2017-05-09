import React, { Component, PropTypes } from 'react';
import { ItemTypes } from '../utils/Constants';
import { DragSource } from 'react-dnd';
import { funnehImage } from '../utils/Constants';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor){
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Knight extends Component {
  componentDidMount(){
    const img = new Image();
    img.src = funnehImage;
    img.onload = () => this.props.connectDragPreview(img);
  }
  render(){
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontweight: 'bold',
        cursor: 'move'
      }}>
      ♘
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
