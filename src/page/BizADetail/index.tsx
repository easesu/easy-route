import useParams from "../../router/useParams";
import Page from "../../router/page";

const PageBizADetail: React.FC = () => {
  const params = useParams(Page.BizADetail);
  return (
    <div>
      <h1>Biz A Detail</h1>
      <div>Detail Id: {params.id}</div>
    </div>
  );
};

export default PageBizADetail;
