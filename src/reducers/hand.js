import { DISCARD_FROM_HAND } from "../actions/discard";
import { ADD_TO_HAND } from "../actions/draw";

function setInitialState() {
    return {
        player1: [],
        player2: [],
        player3: [],
        player4: []
    }
}

export default function hand(state = setInitialState(), action) {
    switch (action.type) {
        case DISCARD_FROM_HAND:
            return state
        case ADD_TO_HAND:
            const { player, tile , playerNum } = action
            console.log(tile)
            player.push(tile)
            return {
                ...state,
                ['player' + playerNum]: player
            }
        default:
            return state
    }
}