import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Action
export const getAllData = createAsyncThunk("gitUsers", async (args, { rejectWithValue }) => {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json(); // Added await here
    console.log(result)
    return result;

});

export const gitUser = createSlice({
    name: "gitUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default gitUser.reducer;
