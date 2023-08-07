import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponents: {},
};

const builderSlice = createSlice({
    name: 'builder',
    initialState,
    reducers: {
        addComponent: (state, action) => {
            const { category, component } = action.payload;
            state.selectedComponents = {
                ...state.selectedComponents,
                [category]: component,
            };
        },
    },
});

export const { addComponent } = builderSlice.actions;
export default builderSlice.reducer;
