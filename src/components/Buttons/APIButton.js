// Buttons for interacting with the API via Redux
//  Params: save, update, remove, post, settings, image are boolean values
// which corespond to an API fetch method and target endpoint

import React from 'react'
import { Button } from './Buttons'
import { useSelector } from 'react-redux'

export const APIButton = ({method, target, data}) => {

    const postPending = useSelector(state => state.posts.pending)
    const settingsPending = useSelector(state => state.settings.pending)
    const imagesPending = useSelector(state => state.images.pending)
    const pending = postPending || settingsPending || imagesPending ? true : false
    const label = pending ? "Loading..." : "Save"

    switch (method) {
        case value:
            
            break;
    
        default:
            break;
    }

    const handleSubmit = () => {
        console.log(data)
    }
    
    return (
        <React.Fragment>
        <Button choice="white" alt="Save" callback={handleSubmit}>{label}</Button>
        </React.Fragment>
    )
}