import { handleBatchDraw } from "./draw";

export default function handleStartGame() {
    return (dispatch, getState) => {
        const { player1, player2, player3, player4 } = getState().hand
        dispatch(handleBatchDraw(player1, 1))
        dispatch(handleBatchDraw(player2, 2))
        dispatch(handleBatchDraw(player3, 3))
        dispatch(handleBatchDraw(player4, 4))
    }
}