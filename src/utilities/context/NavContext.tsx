import { createContext, useState } from "react";

interface NavContextProps {
    children: React.ReactNode
}

// TODO: change navcontext to appcontext (nav and theme)

const NavContext = createContext<{
    navActive: boolean, 
    setNavActive: React.Dispatch<React.SetStateAction<boolean>>
}>({navActive: false, setNavActive: () => {}})

function NavContextProvider({children}: NavContextProps) {
    const [navActive, setNavActive] = useState(false)

    return(
        <NavContext.Provider value={{ navActive, setNavActive}}>
            {children}
        </NavContext.Provider>
    )

}

export {NavContext, NavContextProvider}