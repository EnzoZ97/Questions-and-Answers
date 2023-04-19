import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface resultState {
    value: Array<{
        id_question: number, 
        id_answer_seleted: number
    }>
}

const initialState: resultState = {
    value: [],
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers:{
        addResult:(state, action: PayloadAction<
            {
                id_question: number,
            id_answer_seleted: number
            }>) => {
            state.value.push(action.payload);
        },
        removeAll:(state) => {
            state.value = [];
        }, 
    }
})


export const { addResult, removeAll } = resultSlice.actions;
export default resultSlice.reducer;