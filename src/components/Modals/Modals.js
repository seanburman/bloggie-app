import { useSelector } from "react-redux";
import { clearModal } from "../../redux/modals/modalsHelpers";
import { Button } from "../Buttons/Buttons";
import { Link } from 'react-router-dom';

export default function Modal() {
    //TO DO: Adapt to own modal reducer for toasts etc
    const { type, content, callbackURL } = useSelector(state => state.modals)
    const isActive = type !== null

    

    if(!isActive) return null
    return(
        <div className="modal">
        {
            {
                'image': <ModalImage src={content}/>,
                'message': <ModalMessage message={content} callbackURL={callbackURL} />,
                null : null
            }[type]
        }
        </div>
    )
}

function ModalImage({src}) {
    return (
        <div className="modal modal__image">
            <div className="content">
                <img src={src} alt={"Fullsize Preview"} />
            </div>
            <button className="button__close" onClick={() => clearModal()}>
                <i className="fas fa-times-circle" />
            </button>
        </div>
    )
}

function ModalMessage({message, callbackURL}) {


    return (
        <div className="modal modal__message">
            <div className="content__message shadow">
            <p className="space-v-md">{message}</p>
                <Link to={callbackURL} >
                    <Button 
                    choice="red button__md" 
                    callback={() => clearModal()}
                    >
                    Close
                    </Button>
                </Link>
            
            </div>
        </div>
    )
}

