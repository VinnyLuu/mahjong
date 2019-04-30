import { DRAW_FROM_DECK } from "../actions/draw";

function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images.push(r(item)); });
    return images;
  }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function setInitialState() {
    const bamboo = importAll(require.context('../assets/bamboo', false, /\.(png|jpe?g|svg)$/));
    const dragons = importAll(require.context('../assets/dragons', false, /\.(png|jpe?g|svg)$/));
    const man = importAll(require.context('../assets/man', false, /\.(png|jpe?g|svg)$/));
    const pin = importAll(require.context('../assets/pin', false, /\.(png|jpe?g|svg)$/));
    const redDoras = importAll(require.context('../assets/red-doras', false, /\.(png|jpe?g|svg)$/));
    const winds = importAll(require.context('../assets/winds', false, /\.(png|jpe?g|svg)$/));

    const deck = [...bamboo, ...dragons, ...man, ...pin, ...winds,
    ...bamboo, ...dragons, ...man, ...pin, ...winds,
    ...bamboo, ...dragons, ...man, ...pin, ...winds,
    ...bamboo, ...dragons, ...man, ...pin, ...winds]

    shuffleArray(deck)

    const discarded = []
    return {
        deck,
        discarded
    }
}

export default function deck(state = setInitialState(), action) {
    switch (action.type) {
        case DRAW_FROM_DECK:
            const deck = action.deck
            return {
                deck
            }
        default:
            return state
    }
}