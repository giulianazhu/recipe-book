import { createContext, useReducer } from "react";
import { scrollTop } from "../utils/utils";

export const FilterContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    case "setFilter":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case "resetFilters":
      return { initialState };
    default:
      throw new Error("Unknown reducer action");
  }
}

export default function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setFilter(key, value) {
    dispatch({
      type: "setFilter",
      payload: { key, value },
    });
  }

  function resetFilters() {
    dispatch({ type: "resetFilters" });
    scrollTop();
  }

  return (
    <FilterContext.Provider
      value={{
        filters: state,
        setFilter,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
