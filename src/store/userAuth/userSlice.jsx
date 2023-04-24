import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userSliceCases } from "@store/userAuth/userActionCase";

const initUserSlice = {
    username: null,
    isLoad: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initUserSlice,
    reducers: {
        fetchDataStart(state) {
            state.status = "loading";
        },
        fetchDataSuccess(state, action) {
            console.log("reducer action:::", action);
            state.isLoad = false;
            state.username = action.payload.username;
        },
        fetchDataFailure(state, action) {
            state.status = "idle";
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        Object.entries(userSliceCases).forEach(([action, caseReducer]) => {
            builder.addCase(action, caseReducer);
        });
    },
});

export default userSlice.reducer;
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = userSlice.actions;
