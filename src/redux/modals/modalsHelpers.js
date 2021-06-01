import store from '../store'
import { loadModal, resetModal } from './modalsSlice'

export function createModal(type, content, callbackURL) {
    store.dispatch(
        loadModal({
            type: type,
            content: content,
            callbackURL: callbackURL
        })
        
    )
}
export function clearModal(modal) {
    store.dispatch(
        resetModal()
    )
}