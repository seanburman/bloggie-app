import store from '../store'
import { createSettings, fetchSettings, updateOneSettings } from './settingsSlice'

export function getSettings() {
    let { uid } = store.getState().user[0]
    store.dispatch(fetchSettings(uid))
}

export async function saveSettings(settings) {
    await store.dispatch(createSettings(settings))
    getSettings()
}

export async function updateSettings(settings) {
    await store.dispatch(updateOneSettings(settings))
    getSettings()
}
