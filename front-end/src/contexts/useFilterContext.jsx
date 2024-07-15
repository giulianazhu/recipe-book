import { useContext } from "react";
import { FilterContext } from "./SearchContext";

export default function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) throw new Error("Context accessed outside of provider");
  return context;
}
