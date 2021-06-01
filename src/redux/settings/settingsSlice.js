import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSettings = createAsyncThunk(
    'settings/fetchSettings',
    async(uid) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/settings/${uid}`)
        .then(res => res.json())
    }
)

export const createSettings = createAsyncThunk(
    'posts/createSettings',
    async(settings) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/settings/create-settings/`, 
        { 
            method: 'POST', 
            headers:  { 'Content-Type': 'application/json' },
            body: 
                JSON.stringify({
                    uid: settings.uid,
                    blogImage: settings.blogImage,
                    blogTitle: settings.blogTitle,
                    blogIntro: settings.blogIntro
            })
        })
        .then(res => res.json())
    }
)

export const updateOneSettings = createAsyncThunk(
    'posts/updateOneSettings',
    async(settings) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/settings/update-settings/${settings.uid}`, 
        { 
            method: 'PUT', 
            headers:  { 'Content-Type': 'application/json' },
            body: 
                JSON.stringify({
                uid: settings.uid,
                blogImage: settings.blogImage,
                blogTitle: settings.blogTitle,
                blogIntro: settings.blogIntro
            })
        })
        .then(res => res.json())
    }
) 


const initialState = {
    settings: [],
    pending: false
}

const settingsSlice = createSlice({
    name: 'Settings',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchSettings.pending]: (state, action) => {
            state.pending = true
        },
        [fetchSettings.fulfilled]: (state, action) => {
            state.settings = action.payload
            state.pending = false
        },
        [createSettings.pending]: (state, action) => {
            state.pending = true
        },
        [createSettings.fulfilled]: (state, action) => {
            state.settings = [...state.settings, action.payload]
            state.pending = false
        }, 
        [updateOneSettings.pending]: (state, action) => {
            state.pending = true
        },
        [updateOneSettings.fulfilled]: (state, action) => {
            let updatedSettings = state.settings.filter(
                setting => setting._id !== action.payload._id
            )
            updatedSettings = [...updatedSettings, action.payload]
            state.posts = updatedSettings
            state.pending = false
        }
    }
})

export default settingsSlice.reducer
