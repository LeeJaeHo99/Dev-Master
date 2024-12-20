import { configureStore, createSlice } from "@reduxjs/toolkit";

let items = createSlice({
    name: 'items',
    initialState: 'center',
    reducers: {
        setItems(state, action) {
            return action.payload;
        }
    },
});
export let { setItems } = items.actions;

let justify = createSlice({
    name: 'justify',
    initialState: 'center',
    reducers: {
        setJustify(state, action) {
            return action.payload;
        }
    },
});
export let { setJustify } = justify.actions;

let gap = createSlice({
    name: 'gap',
    initialState: '4',
    reducers: {
        setGap(state, action) {
            return action.payload;
        }
    },
});
export let { setGap } = gap.actions;

let direction = createSlice({
    name: 'direction',
    initialState: 'row',
    reducers: {
        setDirection(state, action) {
            return action.payload;
        }
    },
});
export let { setDirection } = direction.actions;

let shrink = createSlice({
    name: 'shrink',
    initialState: [1, 1, 1],
    reducers: {
        setShrink(state, action) {
            return action.payload;
        }
    },
});
export let { setShrink } = shrink.actions;

let grow = createSlice({
    name: 'grow',
    initialState: [0, 0, 0],
    reducers: {
        setGrow(state, action) {
            return action.payload;
        }
    },
});
export let { setGrow } = grow.actions;

let width = createSlice({
    name: 'width',
    initialState: 40,
    reducers: {
        setWidth(state, action) {
            return action.payload;
        }
    },
});
export let { setWidth } = width.actions;

let height = createSlice({
    name: 'height',
    initialState: 24,
    reducers: {
        setHeight(state, action) {
            return action.payload;
        }
    },
});
export let { setHeight } = height.actions;
//css 연습 PAGE


let displayNone = createSlice({
    name: 'displayNone',
    initialState: false,
    reducers: {
        setDisplay(stae, action){
            return action.payload;
        }
    }
});
export let { setDisplay } = displayNone.actions;

let searchText = createSlice({
    name: 'searchText',
    initialState: '',
    reducers: {
        setSearchText(state, action){
            return action.payload;
        }
    }
});
export let { setSearchText } = displayNone.actions;

export default configureStore({
    reducer: {
        items: items.reducer,
        justify: justify.reducer,
        gap: gap.reducer,
        direction: direction.reducer,
        shrink: shrink.reducer,
        grow: grow.reducer,
        width: width.reducer,
        height: height.reducer,
        displayNone: displayNone.reducer,
        searchText: searchText.reducer,
    }
});