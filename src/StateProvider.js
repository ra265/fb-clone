import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext()

export const StateProvider = ({ reducer, intialState, childern }) => 
(
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {childern}
    </StateContext.Provider>    
);

export const useStateValue = () => useContext(StateContext);