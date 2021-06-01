import { createSlice } from '@reduxjs/toolkit'


const modalsSlice = createSlice({
    name: 'modals',
    initialState: {
        type: null,
        content: null,
        callbackURL: null
    },
    reducers: {
        loadModal(state, action) {
            state.type = action.payload.type
            state.content = action.payload.content
            state.callbackURL = action.payload.callbackURL
        },
        resetModal(state) {
            state.type = null
            state.content = null
            state.callbackURL = null
        },
    }
})

export const { loadModal, resetModal } = modalsSlice.actions

export default modalsSlice.reducer