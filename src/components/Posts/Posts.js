import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/Window'
import { getPosts } from '../../redux/posts/postsHelpers'
import { PostCard } from '../Cards/PostCard'
import LoadingSpinner from '../Loading/LoadingSpinner'

export default function Posts({loggedIn}) {
    const { posts, pending } = useSelector(state => state.posts)
    const { width } = useWindowDimensions()
    const arrangement = width >= 1040 ? "triple" : "double"

    const double = posts ?
    {
    array1: [posts.slice(0, (posts.length / 2))],
    array2: [posts.slice((posts.length / 2), posts.length)]
    } : null

    const triple = posts ?
    {
    array1: [posts.slice(0, (posts.length / 3))],
    array2: [posts.slice((posts.length / 3), (posts.length * (2 / 3)))],
    array3: [posts.slice((posts.length * (2 / 3)), posts.length)]
    } : null

    useEffect(() => {
        getPosts()
    },[])

    return (
        <React.Fragment>

            <div className="text__center space-v-md slide-in">
            {
                pending && 
                <div className="flex center flex-center__column">
                    <LoadingSpinner /> Loading Posts
                </div>
            }
            {
                posts.length > 0 && !pending
                ? null
                : <p className="space-v-lg">No posts. Click 'New Post' to get started!</p>
            }
            </div>
        {   
            posts &&
            <div className="grid__map">
            
            <React.Fragment>          
            {   
            arrangement === "double" ?
            <React.Fragment>
                <div className="double1">
                    {
                    double.array1[0].map((post, i) => (
                    <PostCard key={i} edit={loggedIn} post={post}/>
                    ))  
                    }
                </div>
                <div className="double2">
                    {
                    double.array2[0].map((post, i) => (
                    <PostCard key={i} edit={loggedIn} post={post}/>
                    ))  
                    }
                </div>
            </React.Fragment>
            :
            <React.Fragment>
            <div className="triple1">
                    {
                    triple.array1[0].map((post, i) => (
                    <PostCard key={i} edit={loggedIn} post={post}/>
                    ))  
                    }
                </div>
                <div className="triple2">
                    {
                    triple.array2[0].map((post, i) => (
                    <PostCard key={i} edit={loggedIn} post={post}/>
                    ))  
                    }
                </div>
                <div className="triple3">
                    {
                    triple.array3[0].map((post, i) => (
                    <PostCard key={i} edit={loggedIn} post={post}/>
                    ))  
                    }
                </div>
            </React.Fragment>
            } 
            </React.Fragment> 

            </div>
        }        
        </React.Fragment>

    )
}