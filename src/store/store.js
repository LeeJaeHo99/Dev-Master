import { configureStore, createSlice } from "@reduxjs/toolkit";


let score = createSlice({
    name: 'score',
    initialState: 0,
    reducers: {
        plusAndSaveScore(state) {
            const newScore = state + 1;
            localStorage.setItem('score', newScore);
            return newScore;
        }
    }
});
export let { plusAndSaveScore } = score.actions;

let items = createSlice({
    name: 'items',
    initialState: 'center',
})

export default configureStore({
    reducer: {
        items: items.reducer,
    }
});