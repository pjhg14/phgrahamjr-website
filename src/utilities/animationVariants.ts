export const pageTransition = {
    initial: {
        y: '-10vh',
        opacity: 0
    },
    animate: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            damping: 100,
            stiffness: 500
        }
    },
    exit: {
        y: '-10vh',
        opacity: 0
    }
}

export const navTransition = {
    initial: {},
    animate: {},
    exit: {}
}

export const coverTransition = {
    initial: {},
    animate: {},
    exit: {}
}