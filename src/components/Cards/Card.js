import { createModal } from "../../redux/modals/modalsHelpers"

const classes = {
        wrapper: "card shadow slide-in space-v-md",
        image: "card-photo__image",
        title: "card-photo__title",
        content: "card-photo__content"
}

export function Card({children}) {

    return (
        <div className={classes.wrapper}>
                {children}
        </div>
    )
}

export const Image = ({src, alt}) => {
    let openModal = () => {
        createModal('image', src, null)
    }
    return <img className={classes.image} src={src} alt={alt} onClick={() => openModal()}/>
}

export const Title = ({children}) => {
    return <p className={classes.title}>{children}</p>
}
export const Content = ({children}) => {
    return <div className={classes.content}>{children}</div>
}
