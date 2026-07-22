import { createContext, useContext } from "react";
export const RouteChangeStairsContext = createContext(false);

export const useRouteChangeStairs = () => useContext(RouteChangeStairsContext);
