import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const RefContext = createContext();

export const useRefContext = () => {
  return useContext(RefContext);
};

export const RefProvider = ({ children }) => {
  const [refs, setRefs] = useState([]);

  const addRefs = (newRefs) => {
    newRefs.forEach(newRef => {
      refs.push(newRef);
    });
    setRefs(refs);
  };

  return (
    <RefContext.Provider
      value={{
        refs,
        addRefs
      }}
    >
      {children}
    </RefContext.Provider>
  );
};

RefProvider.propTypes = {
  children: PropTypes.object
};