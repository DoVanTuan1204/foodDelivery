import React,{createContext, useContext,useReducer} from "react";

export const StateContext = createContext();
export const StateProvider = ( {reducer, InitialState,children} ) =>(
    <StateContext.Provider value={useReducer(reducer, InitialState)} >
        {children }
    </StateContext.Provider>
)
export  const useStateValue = () => useContext(StateContext)