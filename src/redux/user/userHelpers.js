import { loadUser } from './userSlice'
import store from '../store'
import firebase from '../../firebase/index'
import { fetchSettings } from '../settings/settingsSlice'

export async function storeUser(user) {
    await store.dispatch(loadUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName
    }))
    store.dispatch(fetchSettings(user.uid))
}

export const logOut = () => {
    firebase.auth().signOut()    
}