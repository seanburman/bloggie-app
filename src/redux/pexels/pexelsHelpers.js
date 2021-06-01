import store from '../store'
import { fetchPexels, storeQuery, select_Photo, deselect_Photo } from './pexelsSlice'

export function getPexels(query, results, page) {
    store.dispatch(storeQuery({query}))
    store.dispatch(fetchPexels({query, results, page}))
}

export function selectPhoto(src) {
    store.dispatch(select_Photo(src))
}

export function deselectPhoto() {
    store.dispatch(deselect_Photo())
}