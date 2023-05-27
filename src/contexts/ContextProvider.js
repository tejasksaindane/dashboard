import React, { createContext, useContext, useState } from "react";

const StateContext = createContext(); //then we call that as function
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{ activeMenu,setActiveMenu }}>
      {children}
    </StateContext.Provider>
  );
};

//TODO: Give me the data from the context, Using the context , and specify which one

export const useStateContext = () => useContext(StateContext);
//Children act as Props
