export const Button = ({choice, children, callback}) => {

    const handleClick = () => {
        typeof(callback) === 'function' && callback()
    }

    return (
        <button 
            className={"button__" + choice} 
            onClick={() => handleClick()}
        >
        {children}
        </button>    
    )
}

export const ButtonGhost = ({children, callback}) => {

    const handleClick = () => {
        typeof(callback) === 'function' && callback()
    }

    return (
        <button
            className={"button__ghost"}
            onClick={() => handleClick()}
        >
        {children}
        </button>
    )
}