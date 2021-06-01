import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { getSettings } from "../../redux/settings/settingsHelpers"

export default function BlogIntro() {
    const { settings } = useSelector(state => state.settings)
    const { blogImage, blogTitle, blogIntro } = settings[0]
    const { uid } = useSelector(state => state.user[0])

    useEffect(() => {
        getSettings(uid)
    },[uid])

    
    return (
        <React.Fragment>
            <div className="flex space-v-b-lg">
                <h1>{blogTitle}</h1>
            </div>
            <div className="flex">
            
                
                <div className="flex-center__intro-wrap">
                <img src={blogImage} alt={blogTitle} />
                </div>
                
                <div className="flex-col __blogIntro">
                    <p>{blogIntro}</p>
                </div>
            </div>
        </React.Fragment>
        
    )
}