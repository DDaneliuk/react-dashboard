import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "63a5ca1ffb767cb3aa482ead"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {}
})

export default globalSlice.reducer
