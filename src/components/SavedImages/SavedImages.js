import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/Window'
import { getImages } from '../../redux/images/imagesHelpers'
import { getPosts } from '../../redux/posts/postsHelpers'
import { MyImagesCard } from '../Cards/PhotoCards'

export default function SavedImages() {
    const { images } = useSelector(state => state.images)
    const photos = images
    const { width } = useWindowDimensions()
    const arrangement = width >= 1040 ? "triple" : "double"

    const double = photos ?
    {
    array1: [photos.slice(0, (photos.length / 2))],
    array2: [photos.slice((photos.length / 2), photos.length)]
    } : null

    const triple = photos ?
    {
    array1: [photos.slice(0, (photos.length / 3))],
    array2: [photos.slice((photos.length / 3), (photos.length * (2 / 3)))],
    array3: [photos.slice((photos.length * (2 / 3)), photos.length)]
    } : null

    useEffect(() => {
        getImages()
        //TO DO: Delete next line, just testing
        getPosts()
    },[])

    return (
        <React.Fragment>

            <div className="flex-center text__center space-v-md slide-in">
            {
                photos.length > 0 
                ? <p>Browse and edit images, upload from your device, or find free images from Pexels!</p>
                : <p>No images here. Upload from your device or find free images from Pexels!</p>
            }
            </div>
        {   
            photos &&
            <div className="grid__map">
            
            <React.Fragment>          
            {   
            arrangement === "double" ?
            <React.Fragment>
                <div className="double1">
                    {
                    double.array1[0].map((photo, i) => (
                    <MyImagesCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="double2">
                    {
                    double.array2[0].map((photo, i) => (
                    <MyImagesCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
            </React.Fragment>
            :
            <React.Fragment>
            <div className="triple1">
                    {
                    triple.array1[0].map((photo, i) => (
                    <MyImagesCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="triple2">
                    {
                    triple.array2[0].map((photo, i) => (
                    <MyImagesCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="triple3">
                    {
                    triple.array3[0].map((photo, i) => (
                    <MyImagesCard key={i} photo={photo}/>
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