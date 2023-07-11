import { lazy } from "react";
import MainLayout from "../layout/Main";
import { RouteRenderEntity } from "./definition";
import Page from "./page";

const route: RouteRenderEntity[] = [
  {
    Component: MainLayout,
    children: [
      {
        page: Page.Index,
        Component: lazy(() => import("../page/Index")),
      },
      {
        page: Page.BizA,
        Component: lazy(() => import("../page/BizA")),
      },
      {
        page: Page.BizADetail,
        Component: lazy(() => import("../page/BizADetail")),
      },
      {
        page: Page.BizB,
        Component: lazy(() => import("../page/BizB")),
      },
    ],
  },
];

export default route;
