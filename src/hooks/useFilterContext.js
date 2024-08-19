import { useContext } from "react";
import { FilterContext } from "../context/FilterProvider";

export const useFilterContext = () => useContext(FilterContext)