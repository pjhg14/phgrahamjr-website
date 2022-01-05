import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Portfolio({ isDarkTheme, setIsDarkTheme }) {
    return(
        <>
            <Navigation isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            <Outlet />
        </>
    )
}