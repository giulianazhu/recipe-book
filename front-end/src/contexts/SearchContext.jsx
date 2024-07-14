// import { createContext, useReducer } from "react";
// import { pageSizeOptions } from "../utils/constants";
// import { scrollTop } from "../utils/utils";

// export const FilterContext = createContext();
// // export const PageContext = createContext();

// // const initialState = {
// // filters: {},
// // page: 1,
// // pageSize: pageSizeOptions[0],
// // appliedFilters: {},
// // };

// const initialState = {};

// function reducer(state, action) {
//   switch (action.type) {
//     case "setFilter":
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           [action.payload.key]: action.payload.value,
//         },
//       };
//     case "resetFilters":
//       return { ...state, filters: initialState.filters };
//     // case "searchReset":
//     //   return { ...state, page: initialState.page };
//     // case "setNextPage":
//     //   return { ...state, page: state.page + 1 };
//     // case "setPrevPage":
//     //   return { ...state, page: Math.max(state.page - 1, 1) };
//     // case "setPageSize":
//     //   return { ...state, pageSize: action.payload };
//     // case "setApplyFilters":
//     //   return { ...state, appliedFilters: state.filters };
//     default:
//       throw new Error("Unknown reducer action");
//   }
// }

// export default function SearchProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function setFilter(key, value) {
//     dispatch({
//       type: "setFilter",
//       payload: { key, value },
//     });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: "setApplyFilters" });
//     dispatch({ type: "searchReset" });
//     scrollTop();
//   }

//   // function setNextPage() {
//   //   dispatch({ type: "setNextPage" });
//   //   scrollTop();
//   // }

//   // function setPrevPage() {
//   //   dispatch({ type: "setPrevPage" });
//   //   scrollTop();
//   // }

//   // function setPageSize(size) {
//   //   dispatch({ type: "setPageSize", payload: size });
//   // }

//   function resetFilters() {
//     dispatch({ type: "resetFilters" });
//   }

//   return (
//     <FilterContext.Provider
//       value={{
//         filters,
//         page,
//         pageSize,
//         appliedFilters,
//         setFilter,
//         resetFilters,
//         handleSubmit,
//       }}
//     >
//       <PageContext.Provider
//         value={{ page, setPageSize, setPrevPage, setNextPage }}
//       >
//         {children}
//       </PageContext.Provider>
//     </FilterContext.Provider>
//   );
// }
