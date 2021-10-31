export const initialState = {
    project: null,
    isOpen: false
}

export function modalReducer(state, action) {
    switch (action.type) {
        case "open":
            // opens modal and displays provided project
            return {
                ...state,
                project: action.payload,
                isOpen: true
            }
        case "close":
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