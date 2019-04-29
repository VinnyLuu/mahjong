import React, { Component } from 'react'

class Tile extends Component {
    
    render() {
        return (
            <img src={this.props.img} alt='tile'/>
        )
    }
}

export default Tile