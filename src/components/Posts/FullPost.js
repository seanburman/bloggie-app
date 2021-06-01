import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Button } from "../Buttons/Buttons"
import LoadingSpinner from "../Loading/LoadingSpinner"

export default function FullPost() {
    const { selectedPost, pending } = useSelector(state => state.posts)
    const history = useHistory()
    if(!selectedPost) return null
    const sp = selectedPost[0]
    
    return (
        <React.Fragment>
        {
            pending
            ? <div className="flex-center">
                <LoadingSpinner/>
                <p className="space-v-md">Loading Posts</p>
              </div>
              :
              <div className="flex-center__column slide-in">
                    <div className="flex-end">
                    <Button choice="red button__lg" callback={() => history.goBack()}>Back to Posts</Button>
                    </div>

                    <div className="flex-center space-v-lg">
                        <img src={sp.src} alt={sp.uploadSource} style={{"max-width": "100%"}}/>
                    </div>
                    
                    <p>Photo by: {sp.uploadSource}</p>
                    <h1 className="space-v-md">{sp.title}</h1>
                    <pre>{sp.content}</pre>
              </div>
        }
       </React.Fragment> 
    )
}