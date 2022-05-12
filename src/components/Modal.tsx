import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "../utilities/context/ModalContext";

interface ModalProps {
    children: React.ReactNode,
}

export default function Modal({ children }: ModalProps) {
    const { state, dispatch } = useContext(ModalContext)

    function handleClose() {
        dispatch({ type: "close", payload: null })
    }

    // TODO: Move animation to animationVariants and touch-up animation
    const dropIn = {
        hidden: {
            y: '-50vh',
            opacity: 0
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 100,
                stiffness: 500
            }
        },
        exit: {
            y: '-50vh',
            opacity: 0
        }
    }


    return createPortal(
        <AnimatePresence exitBeforeEnter>
            { state.visible && 
                <motion.div 
                    className="backdrop" //add light / dark toggle to class list 
                    onClick={handleClose}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // exit={{ opacity: 0 }}
                >    
                    <motion.div className="modal"
                        onClick={e => e.stopPropagation()}
                        // variants={dropIn}
                        // initial="hidden"
                        // animate="visible"
                        // exit="exit"
                    >   
                        <i className="fas fa-times modal-close" onClick={handleClose}></i>
                        { children }
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>, document.getElementById('portal') as HTMLElement)
}