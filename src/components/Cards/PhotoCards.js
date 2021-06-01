import { useSelector } from "react-redux";
import { deleteImage } from "../../redux/images/imagesHelpers";
import { Image } from "../../redux/models";
import { Button } from "../Buttons/Buttons";
import * as Card from "./Card";

export function MyImagesCard({photo}){
        const { uid, displayName } = useSelector(state => state.user[0])
        const { photoUrls } = useSelector(state => state.images)
        const imageIsSaved = photoUrls.indexOf(photo.src) > -1
        const label = imageIsSaved ? "Remove Image" : "Save Image"

        const handleClick = () => {
                if(!imageIsSaved) {
                        const image = new Image(uid, displayName, photo.src)
                        image.create()        
                } else {
                        deleteImage(photo.src)
                }
        }

        return(
                <Card.Card>
                <Card.Image src={photo.src} alt={photo.uploadSource} />
                <Card.Title>
                        Photo: <br />
                        <a 
                        href={`https://www.pexels.com/search/users/${photo.uploadSource}`}
                        target="blank"
                        >
                        {photo.uploadSource}
                        </a>
                </Card.Title>
                <Card.Content>
                        <Button choice="red button__md" callback={handleClick}>{label}</Button>
                </Card.Content>
                </Card.Card>              
        )
}

export function PexelsCard({photo}){
        const { uid } = useSelector(state => state.user[0])
        const { photoUrls } = useSelector(state => state.images)
        const imageIsSaved = photoUrls.indexOf(photo.src.large2x) > -1
        const label = imageIsSaved ? "Remove Image" : "Save Image"


        const handleClick = () => {
                if(!imageIsSaved) {
                        const image = new Image(uid, photo.photographer, photo.src.large2x)
                        image.create()        
                } else {
                        deleteImage(photo.src.large2x)
                }
        }

        return(
                <Card.Card>
                        <Card.Image src={photo.src.large2x} alt={photo.photographer} />
                        <Card.Title>
                                Photo: <br />
                                <a 
                                href={`https://www.pexels.com/search/users/${photo.photographer}`}
                                target="blank"
                                >
                                {photo.photographer}
                                </a>
                        </Card.Title>
                        <Card.Content>
                                <Button choice="red button__md" callback={handleClick}>{label}</Button>
                        </Card.Content>
                </Card.Card>              
        )
}