import React, { Component } from 'react'
import Tile from './Tile'

class Hand extends Component {
    render() {
        const { hand } = this.props
        return (
            <ul className='hand'>
                {hand.map((tile, index) => (
                   <li key={index}>
                       <Tile img={tile}/>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Hand