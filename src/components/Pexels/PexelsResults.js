import React from 'react'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../hooks/Window'
import { getPexels } from '../../redux/pexels/pexelsHelpers'
import { PexelsCard } from '../Cards/PhotoCards'
import './PexelsResults.css'

export default function PexelsResults() {
    const _pexels = useSelector(state => state.pexels)
    const { query, resultsPerPage, pexels} = _pexels
    const { photos, total_results, page, per_page} = pexels
    const pages = Math.ceil(total_results/per_page)
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

    const previous = () => {
        getPexels(query.query, resultsPerPage, (page-1))
    }

    const next = () => {
        getPexels(query.query, resultsPerPage, (page+1))
    }

    return (
        <React.Fragment>
        {
            photos && photos.length > 0 &&
            <div className="pexels-pagination fade-in">
                <button className="prev-next" disabled={!(page !== 1)} onClick={() => previous()}>
                    <i className="fas fa-arrow-circle-left" />
                </button>
                <p>{page} / {pages}</p>
                <button className="prev-next" disabled={!(page !== pages)} onClick={() => next()}>
                    <i className="fas fa-arrow-circle-right" />
                </button>
            </div>
        }
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
                    <PexelsCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="double2">
                    {
                    double.array2[0].map((photo, i) => (
                    <PexelsCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
            </React.Fragment>
            :
            <React.Fragment>
            <div className="triple1">
                    {
                    triple.array1[0].map((photo, i) => (
                    <PexelsCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="triple2">
                    {
                    triple.array2[0].map((photo, i) => (
                    <PexelsCard key={i} photo={photo}/>
                    ))  
                    }
                </div>
                <div className="triple3">
                    {
                    triple.array3[0].map((photo, i) => (
                    <PexelsCard key={i} photo={photo}/>
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
