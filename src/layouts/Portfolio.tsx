import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

interface PropTypes {
    isDarkTheme: boolean,
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Portfolio(): JSX.Element {
    return(
        <>
            <Navigation />
            <Outlet />
        </>
    )
}