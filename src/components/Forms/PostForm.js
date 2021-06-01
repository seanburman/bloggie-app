import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { getImages } from "../../redux/images/imagesHelpers"
import { createModal } from "../../redux/modals/modalsHelpers"
import { Post } from "../../redux/models"
import { clearSelectedPost, getPostByID, savePost, updatePost} from "../../redux/posts/postsHelpers"
import { Button } from "../Buttons/Buttons"
import Carousel from "../Carousel/Carousel"
import LoadingSpinner from "../Loading/LoadingSpinner"
import './PostForm.css'

export default function PostForm({editPost}){
    const { images } = useSelector(state => state.images)
    const user = useSelector(state => state.user)
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [image, setImage] = useState({uploadSource: "", src:""})
    const { selectedPost, pending } = useSelector(state => state.posts)
    const params = useParams()
    var uid = user.length > 0 ? user[0].uid : null
    
    const onTitleChange = (e) => setTitle(e.target.value)
    const onContentChange = (e) => setContent(e.target.value)

    const newPost =  new Post(uid, image.uploadSource, image.src, title, content)

    useEffect(() => {
        getImages()
        if(params.id) {
            getPostByID(params.id)
        }
    },[])

    useEffect(() => {
        if(params.id && selectedPost) {
            let sp  = selectedPost[0]
            setImage({uploadSource: sp.uploadSource, src: sp.src})
            setTitle(sp.title)
            setContent(sp.content)
        }
    },[selectedPost])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(editPost) {
            updatePost(params.id, newPost)
            clearSelectedPost()
            createModal('message', 'Your post was updated!', '/Dashboard')
        } else {
            savePost(newPost)
            createModal('message', 'Your new post was created!', '/Dashboard')
        }
    }

    const resetForm = () => {
        setTitle("")
        setContent("")
    }

    return (
        
        <div className="new-post-form-wrapper slide-in">
            <div className="flex-end">
                <Link to={'/Dashboard'}>
                    <Button choice="red button__lg">Back to Posts</Button>
                </Link>
            </div>
            
            <div className="instruction">
                <div className="instruction-number">1</div>
                <p>Choose an image from your collection.</p>
            </div>
            {   
               images.length > 0
                ? <Carousel callback={setImage}/>
                : <div>
                  <p>Search or upload images on the Images page to use them for your blog posts!</p>
                  </div>
            }
            <div className="instruction">
            <div className="instruction-number">2</div>
            <p>Release your inner poet and save it to your blog!</p>
            </div>

            {   
            pending
            ?
            <div className="flex-center flex-center__column space-v-md">
            <LoadingSpinner />
            <p>Loading Post</p>
            </div>
            :
            <form className="new-post-form slide-in" onSubmit={handleSubmit}>
            <input
                type="text"
                id="post-title"
                name="post-title"
                className="shadow"
                value={title}
                onChange={onTitleChange}
                placeholder="Catchy blog post title goes here..."
                required
            />
            <textarea
                type="text"
                id="post-body"
                name="post-body"
                className="shadow"
                value={content}
                onChange={onContentChange}
                rows="10"
                placeholder="Dear bloggie, today I..."
                required
            />
            <div className="save-post-button-wrapper">
                <button  
                    type="submit"
                    className="button__md button__red space-hz-sm shadow hover-bounce"
                    onClick={handleSubmit}
                >
                Save Post
                </button>
                <button 
                    type="reset" 
                    className="button__md button__white space-hz-sm shadow hover-bounce" 
                    onClick={() => resetForm()}
                >
                Reset
                </button>
            </div>
            
            </form>
            }
            
        </div>
    )
}