import { removeImageLocal, storeImageLocal} from '../pexels/pexelsSlice'
import store from '../store'
import { fetchImages, postImage, removeImage } from './imagesSlice'

export function getImages() {
    let { uid } = store.getState().user[0]
    store.dispatch(fetchImages(uid))
}

export async function saveImage(image) {
    await store.dispatch(postImage(image))
    store.dispatch(storeImageLocal(image))
    getImages()
}

export async function deleteImage(url) {
    let { uid } = store.getState().user[0]
    await store.dispatch(removeImage({uid, url}))
    store.dispatch(removeImageLocal(uid, url))
    getImages()
}