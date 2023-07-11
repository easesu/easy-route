import { useMemo, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./router";
import Page from "./router/page";
import { generatePath } from "./router/util";
import { ROUTE_BASE_NAME } from "./config/global";
import "./styles.css";

export default function App() {
  const router = useMemo(() => {
    return createBrowserRouter(routes, {
      basename: ROUTE_BASE_NAME,
    });
  }, []);

  useEffect(() => {
    if (
      !window.location.pathname
        .toLowerCase()
        .startsWith(ROUTE_BASE_NAME.toLowerCase())
    ) {
      const path = generatePath(Page.Index);
      router.navigate(`${ROUTE_BASE_NAME}${path}`, {
        replace: true,
      });
    }
  }, []);

  return <RouterProvider router={router} />;
}
