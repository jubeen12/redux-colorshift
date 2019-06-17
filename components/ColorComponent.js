import React from "react";
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
class ColorComponent extends React.Component {

    updateBackgroundColor = (newColor) => {
        this.props.dispatch({
            type: 'CHANGE_COLOR',
            color: newColor
        });
    }

    render() {
        return (
            <div>
            <button onClick={() =>
               {this.updateBackgroundColor(Colors.RED)}}>RED
            </button>
            <button onClick={() =>
               {this.updateBackgroundColor(Colors.GREEN)}}>GREEN
            </button>
            <div className="color-container"
               style={{backgroundColor: this.props.color,
                       width: '200px', height: '200px'}} />
         </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        color: state.color
    };
}

export default connect(mapStateToProps)(ColorComponent);