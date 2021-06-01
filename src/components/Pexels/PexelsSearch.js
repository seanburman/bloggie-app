import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getImages } from "../../redux/images/imagesHelpers";
import LoadingSpinner from "../Loading/LoadingSpinner";
import PexelsResults from "./PexelsResults";
import SearchBar from "./SearchBar";

export default function PexelsSearch() {

    const { pending } = useSelector(state => state.pexels)

    useEffect(() => {
        getImages()
    },[])

    return (
        <div className="flex-center__column slide-in">
        <div className="flex-center space-v-md">
            <p>
                Search and save images, courtesy of 
                <a href="https://www.pexels.com" target="blank" style={{paddingLeft: "0.25em"}}>
                Pexels
                </a>
            </p>
        </div>
        
            <SearchBar />
            {
                pending
                ? <LoadingSpinner />
                : <PexelsResults />
            }
            
        
        
        </div>
    )
}