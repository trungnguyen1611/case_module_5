import {createSlice} from '@reduxjs/toolkit';
import axios from "../API/axios";

const searchSlice = createSlice({
    name: 'search',
    initialState: {value: '', result: []},
    reducers: {
        search: (state, action) => {
            state.value = action.payload
            axios.get(`/search/movie?api_key=736526407eddab33d53a2e42284a1d01&language=vi&query=${action.payload}`)
                .then(result => state.result=result.data.results)
        }
    }
})

export const {search} = searchSlice.actions

export default searchSlice.reducer