import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPostByID = createAsyncThunk(
    'posts/fetchPostByID',
    async(id) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/posts/post/${id}`)
        .then(res => res.json())
    }
)

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async(uid) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/posts/${uid}`)
        .then(res => res.json())
    }
)

export const createPost = createAsyncThunk(
    'posts/createPost',
    async(post) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/posts/create-post/`, 
        { 
            method: 'POST', 
            headers:  { 'Content-Type': 'application/json' },
            body: 
                JSON.stringify({
                uid: post.uid,
                uploadSource: post.uploadSource,
                src: post.src,
                title: post.title,
                content: post.content,
                date: post.date
            })
        })
        .then(res => res.json())
    }
)

export const updateOnePost = createAsyncThunk(
    'posts/updateOnePost',
    async(post) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/posts/update-post/${post._id}`, 
        { 
            method: 'PUT', 
            headers:  { 'Content-Type': 'application/json' },
            body: 
                JSON.stringify({
                uid: post.uid,
                uploadSource: post.uploadSource,
                src: post.src,
                title: post.title,
                content: post.content,
                date: post.date
            })
        })
        .then(res => res.json())
    }
) 

export const removePost = createAsyncThunk(
    'posts/removePost',
    async(id) => {
        return fetch(`https://bloggie-api.herokuapp.com/api/posts/delete-post/${id}`, 
        { method: 'DELETE', headers:  { 'Content-Type': 'application/json' }}
        )
        .then(res => res.json())
    }
) 

const initialState = {
    posts: [],
    selectedPost: null,
    pending: false
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        removeSelectedPost(state, action) {
            state.selectedPost = null
        }
    },
    extraReducers: {
        [fetchPostByID.pending]: (state, action) => {
            state.pending = true
        },
        [fetchPostByID.fulfilled]: (state, action) => {
            state.selectedPost = action.payload
            state.pending = false
        }, 
        [fetchPosts.pending]: (state, action) => {
            state.pending = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.pending = false
        }, 
        [createPost.pending]: (state, action) => {
            state.pending = true
        },
        [createPost.fulfilled]: (state, action) => {
            state.posts = [...state.posts, action.payload]
            state.pending = false
        }, 
        [updateOnePost.pending]: (state, action) => {
            state.pending = true
        },
        [updateOnePost.fulfilled]: (state, action) => {
            let updatedPosts = state.posts.filter(
                post => post._id !== action.payload._id
            )
            updatedPosts = [...updatedPosts, action.payload]
            state.posts = updatedPosts
            state.pending = false
        }, 
        [removePost.pending]: (state, action) => {
            state.pending = true
        },
        [removePost.fulfilled]: (state, action) => {
            state.posts = state.posts.filter(
                post => post._id !== action.payload._id
            )
            state.pending = false
        },
    }
})

export const { removeSelectedPost } = postsSlice.actions

export default postsSlice.reducer