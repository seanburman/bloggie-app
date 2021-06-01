import { useSelector } from "react-redux";
import { Route, Switch} from "react-router";
import { Link } from "react-router-dom";
import { Button } from "../../components/Buttons/Buttons";
import PostForm from "../../components/Forms/PostForm";
import FullPost from "../../components/Posts/FullPost";
import Posts from "../../components/Posts/Posts";
import BlogIntro from "./BlogIntro";

export default function Blog() {
    const {settings} = useSelector(state => state.settings)
    return (
        <div className="flex-center__column slide-in">
        <Switch>
                <Route exact path={`/Dashboard/NewPost`}>
                <PostForm />
                </Route>

                <Route exact path={`/Dashboard/EditPost/:id`}>
                <PostForm editPost/>
                </Route>

                <Route exact path={`/Dashboard/Post/:postId`}>
                <FullPost />
                </Route>

                <Route path={`*`}>
                    <div className="slide-in">
                        <div className="flex-end">
                            <Link to={'/Dashboard/NewPost'}>
                                <Button choice="red button__lg">
                                New Post
                                </Button>
                            </Link>
                        </div>
                        {
                            settings.length > 0 ? <BlogIntro /> : null
                        }
                        <Posts loggedIn/>
                    </div>
                </Route>
            </Switch>
        </div>    
    )
    
}