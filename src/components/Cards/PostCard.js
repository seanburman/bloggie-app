import { Link } from 'react-router-dom'
import { createModal } from '../../redux/modals/modalsHelpers'
import { deletePost, getPostByID } from '../../redux/posts/postsHelpers'
import { Button } from '../Buttons/Buttons'
import * as Card from './Card'

export function PostCard({post, edit}){
    const titleSubString = post.title.substr(0, 60)
    const contentSubString = post.content.substr(0,100)
    const titleElipses = post.title.length > 60 ? "..." : ""
    const contentElipses = post.content.length > 100 ? "..." : ""

    const editPost = () => {
        // do some editing
    }
    const removePost = () => {
        deletePost(post._id)
        createModal('message', 'Your post was deleted!', '/Dashboard')
    }
    
    async function viewPost() {
        await getPostByID(post._id)
    }

    return(
                <Card.Card>
                <Card.Image src={post.src} alt={post.uploadSource} />
                <Card.Title>
                    Photo: <br />
                    <a 
                    href={`https://www.pexels.com/search/users/${post.uploadSource}`}
                    target="blank"
                    >
                    {post.uploadSource}
                    </a>
                </Card.Title>
                <Card.Title>Posted On: {post.date}</Card.Title>
                <Card.Title>{titleSubString + titleElipses}</Card.Title>
                        <p className="space-v-sm">{contentSubString + contentElipses}</p>
                <Card.Content>
                <div className="flex-col">
                    { edit &&
                        <div className="flex-center space-v-sm">
                            <Link to={`/Dashboard/EditPost/${post._id}`}>
                                <Button choice="white button__sm space-hz-xs" callback={editPost}>
                                Edit
                                </Button>
                            </Link>

                            
                            <Button choice="white button__sm space-hz-xs" callback={removePost}>
                            Delete
                            </Button>
                        </div>
                        
                    }
                    <div className="flex-center">
                        <Link to={`/Dashboard/Post/${post._id}`}>
                            <Button choice="red button__md" callback={viewPost}>View Post</Button>
                        </Link>
                    </div>
                </div>
                </Card.Content>
                </Card.Card>                
    )
}