export const initialState = {
    theme: "dark"
}

export function themeReducer(state: any, action: any) {
    switch (action.type) {
        case "light":
            // opens modal and displays provided project
            return {
                ...state,
                project: action.payload,
                isOpen: true
            }
        case "dark":
            // closes modal and clears current project
            return {
                ...state,
                project: null,
                isOpen: false
            }
        
        default:
            return state;
    }
}

enum Themes {
    Light = "light",
    Dark = "dark"
}