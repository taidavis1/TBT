import { createSlice } from "@reduxjs/toolkit";

export const ActiveTabSlice = createSlice({
    name: "activeTab",
    initialState: {
        value: "",
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveTab } = ActiveTabSlice.actions;
export default ActiveTabSlice.reducer;