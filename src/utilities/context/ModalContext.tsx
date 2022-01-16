import React, { createContext, useReducer } from "react";
import { Project } from "../interfaces";

type ModalState = {
    project: Project | null,
    visible: boolean
}

type ModalAction = 
    | { type: "open"; payload: Project }
    | { type: "close"; payload: null }

const initialState: ModalState = {
    project: null,
    visible: false
}

function modalReducer(state: ModalState, action: ModalAction): ModalState {
    const { type, payload } = action

    switch (type) {
        case "open":
            // opens modal and displays provided project

            return {
                ...state,
                project: payload,
                visible: true
            }
        case "close":
            // closes modal and clears current project

            return {
                ...state,
                project: null,
                visible: false
            }
        default:
            return state;
    }
}

const ModalContext = createContext<{
    state: ModalState; 
    dispatch: React.Dispatch<ModalAction>
}>({ state: initialState, dispatch: () => {}})

interface ModalContextProps {
    children: React.ReactNode
}

function ModalContextProvider({ children }: ModalContextProps): JSX.Element {
    const [state, dispatch] = useReducer(modalReducer, initialState)

    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalContextProvider }