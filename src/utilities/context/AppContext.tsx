import { createContext, useReducer, useState } from "react";

type AppState = {
    navActive: boolean,
    isDarkTheme: boolean
}

type AppActions =
    | {type: "open"}
    | {type: "close"}
    | {type: "toggleNav"}
    | {type: "light"}
    | {type: "dark"}
    | {type: "toggleTheme"}

const initialState: AppState = {
    navActive: false,
    isDarkTheme: true
}

function appReducer(state: AppState, action: AppActions): AppState {
    const { type } = action

    switch (type) {
        case "open":
            
            return {
                ...state,
                navActive: true
            }
        case "close":
        
            return {
                ...state,
                navActive: false
            }
        case "toggleNav":
    
            return {
                ...state,
                navActive: !state.navActive
            }
        case "dark":
        
            return {
                ...state,
                isDarkTheme: true
            }
        case "light":
        
            return {
                ...state,
                isDarkTheme: false
            }
        case "toggleTheme":

            return {
                ...state,
                isDarkTheme: !state.isDarkTheme
            }
        default:
            return state
    }
}


interface AppContextProps {
    children: React.ReactNode
}


const AppContext = createContext<{
    state: AppState 
    dispatch: React.Dispatch<AppActions>
}>({state: initialState, dispatch: () => {}})

function AppContextProvider({children}: AppContextProps) {
    const [state, dispatch] = useReducer(appReducer, initialState)

    return(
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )

}

export { AppContext, AppContextProvider }