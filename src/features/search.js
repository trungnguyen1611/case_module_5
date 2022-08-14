import {createSlice} from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name: 'search',
    initialState: {value: '', result: []},
    reducers: {
        search: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const {search} = searchSlice.actions

export default searchSlice.reducer