import { useMemo } from "react";
import { useMatches } from "react-router-dom";
import Page from "./page";

const useMatchedPage = () => {
  const matchedRoutes = useMatches();

  const matchedPages = useMemo(() => {
    return matchedRoutes.map((item) => item.id).filter((id) => id) as Page[];
  }, [matchedRoutes]);

  return {
    matchedPages,
    matchedPage: matchedPages[matchedPages.length - 1],
  };
};

export default useMatchedPage;
