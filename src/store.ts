import { combineReducers, createStore } from "redux";
import { GameMovesReducer } from "./Reducers/GameMoves/GameMovesReducer";

const rootReducer = combineReducers({
    moves: GameMovesReducer,
})

export type RootStore = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)