import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function Portfolio({ isDarkTheme, setIsDarkTheme }) {
    return(
        <div>
            <Navigation isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            <Outlet />
        </div>
    )
}