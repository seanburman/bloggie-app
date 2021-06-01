import store from '../store'
import { createPost, fetchPostByID, fetchPosts, removePost, removeSelectedPost, updateOnePost } from './postsSlice'

export async function getPostByID(id) {
    await store.dispatch(fetchPostByID(id))
}

export function clearSelectedPost() {
    store.dispatch(removeSelectedPost())
}

export function getPosts() {
    let { uid } = store.getState().user[0]
    store.dispatch(fetchPosts(uid))
}

export async function savePost(post) {
    await store.dispatch(createPost(post))
    getPosts()
}

export async function updatePost(id, post) {
    let postWithId = Object.assign(post, {_id:id})
    await store.dispatch(updateOnePost(postWithId))
    getPosts()
}

export async function deletePost(id) {
    await store.dispatch(removePost(id))
    getPosts()
}

export function dateMaker() {
    const d = new Date()
    const year = d.getFullYear()
    const day = d.getDate()
    const month = d.getMonth()
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    return (day + " " + months[month] + " " + year)
}