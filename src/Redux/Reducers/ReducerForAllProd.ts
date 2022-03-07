let initialState = {
    elementId: ''
}

export const reducerForAllProd = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    return state
}


type setIdACType = ReturnType<typeof setIdAC>
export const setIdAC = (id: any) => {
    return {
        type: "SET_ID",
        id
    } as const
}
type ActionsType = setIdACType
type initialStateType = typeof initialState