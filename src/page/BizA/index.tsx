import { useCallback } from "react";
import useNavigate from "../../router/useNavigate";
import Page from "../../router/page";
import Link from "../../router/Link";
import { Link as ReactRouterLink } from "react-router-dom";
import "./index.css";

const PageBizA: React.FC = () => {
  const navigate = useNavigate();

  const detailList = [
    {
      label: "BizA 1 详情",
      id: "1",
    },
    {
      label: "BizA 2 详情",
      id: "2",
    },
  ];

  const handleViewDetal = useCallback((id: string) => {
    navigate(Page.BizADetail, { id });
  }, []);

  return (
    <div className="bizA">
      <h1 className="bizAPageTitle">BizA</h1>
      <div className="bizAGroupTitle">使用useNavigate跳转</div>
      <div className="bizAGroupBody">
        {detailList.map((item) => (
          <div className="bizAGroupItem" key={item.id}>
            <button
              className="bizAButton"
              onClick={() => handleViewDetal(item.id)}
            >
              查看 {item.label}
            </button>
          </div>
        ))}
      </div>
      <div className="bizAGroupTitle">使用Link组件跳转</div>
      <div className="bizAGroupBody">
        {detailList.map((item) => (
          <div className="bizAGroupItem" key={item.id}>
            <Link
              className="bizALink"
              page={Page.BizADetail}
              params={{ id: item.id }}
            >
              查看 {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="bizAGroupTitle">页面不存在</div>
      <div className="bizAGroupBody">
        <div className="bizAGroupItem">
          <ReactRouterLink to="/xx/xx">跳转到不存在的页面</ReactRouterLink>
        </div>
      </div>
    </div>
  );
};

export default PageBizA;
