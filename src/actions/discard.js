export const DISCARD_FROM_HAND = 'DISCARD_FROM_HAND'

function discardTile(tile) {
    return {
        action: DISCARD_FROM_HAND,
        tile
    }
}

export function handleDiscard() {
    
}