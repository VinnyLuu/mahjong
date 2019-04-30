import { combineReducers } from 'redux'
import deck from './deck'
import hand from './hand'

export default combineReducers({
    deck,
    hand
})