import { RouteObject } from "react-router-dom";
import Page404 from "../page/404";
import { PathType, RouteRenderEntity } from "./definition";
import path from "./path";
import renderer from "./renderer";

const generate = (renderers?: RouteRenderEntity[]): RouteObject[] => {
  if (!Array.isArray(renderers)) {
    return [];
  }
  const routes: RouteObject[] = renderers.map((item) => {
    const routePath =
      item.page && item.page in path ? path[item.page as keyof PathType] : {};
    return {
      id: item.page,
      path: (routePath as any).path || "",
      Component: item.Component,
      children: generate(item.children),
    };
  });

  routes.push({
    path: "*",
    Component: Page404,
  });

  console.log(routes);

  return routes;
};

export default generate(renderer);
