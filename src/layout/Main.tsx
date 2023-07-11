import { Suspense, useMemo } from "react";
import Page from "../router/page";
import Link from "../router/Link";
import { Outlet } from "react-router-dom";
import "./main.css";
import PageLoader from "../component/PageLoader";
import useMatchedPages from "../router/useMatchedPages";

const menu = [
  {
    label: "Index",
    page: Page.Index,
  },
  {
    label: "BizA",
    page: Page.BizA,
    subPages: [Page.BizADetail],
  },
  {
    label: "BizB",
    page: Page.BizB,
  },
];

const MainLayout: React.FC = () => {
  const { matchedPage } = useMatchedPages();

  const currentMenu = useMemo(() => {
    return menu.map((item) => ({
      ...item,
      highlight:
        item.page === matchedPage ||
        (item.subPages ? item.subPages.includes(matchedPage) : false),
    }));
  }, [matchedPage]);

  const Loader = useMemo(() => {
    return <PageLoader />;
  }, []);

  return (
    <div className="mainLayout">
      <div className="mainLayoutSide">
        {currentMenu.map((item, itemIndex) => (
          <Link
            className={`mainLayoutSideItem ${
              item.highlight ? "isHighlight" : ""
            }`}
            key={`${item.page}-${itemIndex}`}
            page={item.page}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="mainLayoutBody">
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MainLayout;
