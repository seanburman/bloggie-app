import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchImages = createAsyncThunk(
    'posts/fetchImages',
    async(uid) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/images/${uid}`)
        .then(res => res.json())
    }
)

export const postImage = createAsyncThunk(
    'posts/postImage',
    async(image) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/images/save-image/`, 
        { 
            method: 'POST', 
            headers:  { 'Content-Type': 'application/json' },
            body:
                JSON.stringify({
                    uid: image.uid,
                    uploadSource: image.uploadSource,
                    src: image.src
                })
        })
        .then(res => res.json())
    }
) 

export const removeImage = createAsyncThunk(
    'posts/removeImage',
    async(image) => {
        return fetch(
            `https://bloggie-api.herokuapp.com/api/images/delete-image/`, 
        { 
            method: 'DELETE', 
            headers:  { 'Content-Type': 'application/json' },
            body:
                JSON.stringify({
                    uid: image.uid,
                    url: image.url
                })
        })
        .then(res => res.json())
    }
)

const initialState = {
    images: [],
    photoUrls: [],
    pending: false
}

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        loadImages(state, action) {
            state.posts = action.payload
        }
    },
    extraReducers: {
        [fetchImages.pending]: (state, action) => {
            state.pending = true
        },
        [fetchImages.fulfilled]: (state, action) => {
            state.images = action.payload
            let photoUrls = []
            action.payload.forEach(image => photoUrls.push(image.src))
            state.photoUrls = photoUrls
            state.pending = false
        }, 
        [postImage.pending]: (state, action) => {
            state.pending = true
        },
        [postImage.fulfilled]: (state, action) => {
            state.images = [...state.images, action.payload]
            state.pending = false
        }, 
        [removeImage.pending]: (state, action) => {
            state.pending = true
        },
        [removeImage.fulfilled]: (state, action) => {
            state.images = state.images.filter(
                image => image.src !== action.payload.url
            )
            state.pending = false
        },
    }
})

export const { loadImages } = imagesSlice.actions

export default imagesSlice.reducer