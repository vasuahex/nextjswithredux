import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    value: string
}

const initialState: InitialState = {
    value: "this is redux"
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        printingValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }

})

export const { printingValue } = authSlice.actions
export default authSlice.reducer