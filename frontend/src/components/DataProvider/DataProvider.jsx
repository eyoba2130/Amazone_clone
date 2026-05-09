

import React, { createContext, useContext, useReducer } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children, reducer, initialState }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export const useValue = () => useContext(DataContext);
