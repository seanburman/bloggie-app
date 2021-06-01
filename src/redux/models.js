import { saveImage } from "./images/imagesHelpers"
import { savePost} from "./posts/postsHelpers"
import { saveSettings} from "./settings/settingsHelpers"
import { dateMaker } from './posts/postsHelpers'

export class Image {
    constructor(uid, uploadSource, src) {
        this.uid = uid
        this.uploadSource = uploadSource
        this.src = src
    }
    create() {
        saveImage(
            {
                uid: this.uid, 
                uploadSource: this.uploadSource, 
                src : this.src
            }
        )
    }
}

export class Post {
    constructor(uid, uploadSource, src, title, content) {
        this.uid = uid
        this.uploadSource = uploadSource
        this.src = src
        this.title = title
        this.content = content
        this.date = dateMaker()
    }
    create() {
        savePost(
            {
                uid: this.uid, 
                uploadSource: this.uploadSource, 
                src: this.src ,
                title: this.title, 
                content: this.content, 
                date: this.date
            })
    }
}

export class Settings {
    constructor(uid, blogImage, blogTitle, blogIntro) {
        this.uid = uid
        this.blogImage = blogImage
        this.blogTitle = blogTitle
        this.blogIntro = blogIntro
    }
    create() {
        saveSettings(
            {
            uid: this.uid, 
            blogImage: this.blogImage, 
            blogTitle: this.blogTitle, 
            blogIntro: this.blogIntro    
            }
            
        )
    }
}
