import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/login", async () => {
    try {
        const res = await (await fetch("/api/login")).json();
        console.log(res);
        if (res.success === false) {
            return {
                error: res?.message,
            };
        }
        return {
            ...res?.elements,
        };
    } catch (err) {
        return {
            isLoad: false,
            error: err?.message || "Internal Server Error",
        };
    }
});
