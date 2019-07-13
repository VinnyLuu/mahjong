export const DRAW_FROM_DECK = 'DRAW_FROM_DECK'
export const ADD_TO_HAND = 'ADD_TO_HAND'

function drawFromDeck(deck) {
    return {
        type: DRAW_FROM_DECK,
        deck
    }
}

function addToHand(player, playerNum) {
    return {
        type: ADD_TO_HAND,
        player,
        playerNum
    }
}

export function handleBatchDraw(player, playerNum) {
    return (dispatch, getState) => {
        const { deck } = getState().deck
        const newDeck = deck.slice(0, -13)
        const hand = deck.slice(-13)
        const newHand = [...player]
        dispatch(drawFromDeck(newDeck))
        for (let i = 0; i < 13; i++) {
            newHand.push(hand[i])
            dispatch(addToHand(newHand, playerNum))   
        }
    }
}

export function handleDraw(player, playerNum) {
    return (dispatch, getState) => {
        const { deck } = getState().deck
        const newDeck = deck.slice(0, -1)
        const tile = deck.slice(-1)[0]
        const newHand = [...player]
        console.log(player);
        newHand.push(tile)
        dispatch(drawFromDeck(newDeck))
        dispatch(addToHand(newHand, playerNum))   
        
    }
}