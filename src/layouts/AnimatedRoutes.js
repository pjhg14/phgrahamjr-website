import { AnimatePresence } from "framer-motion";
import { Routes } from "react-router-dom";

export default function AnimatedRoutes({ children }) {
    return(
        <AnimatePresence exitBeforeEnter={true} initial={false}>
            <Routes>
                { children }
            </Routes>
        </AnimatePresence>
    )
}