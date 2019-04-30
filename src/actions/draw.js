export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'
export const ADD_TO_HAND = 'ADD_TO_HAND'

function drawFromDeck(deck) {
    return {
        type: DRAW_FROM_DECK,
        deck
    }
}

function addToHand(tile, player, playerNum) {
    return {
        type: ADD_TO_HAND,
        tile,
        player,
        playerNum
    }
}

export function handleBatchDraw(player, playerNum) {
    return (dispatch, getState) => {
        const { deck } = getState().deck
        const newDeck = deck.slice(0, -13)
        const hand = deck.slice(-13)
        dispatch(drawFromDeck(newDeck))
        for (let i = 0; i < 13; i++) {
            dispatch(addToHand(hand[i], player, playerNum))   
        }
    }
}

export function handleDraw(player, playerNum) {
    return (dispatch, getState) => {
        const { deck } = getState().deck
        const newDeck = deck.slice(0, -1)
        const hand = deck.slice(-1)
        dispatch(drawFromDeck(newDeck))
        dispatch(addToHand(hand[0], player, playerNum))   
        
    }
}