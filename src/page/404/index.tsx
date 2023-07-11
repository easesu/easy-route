import Link from '../../router/Link';
import Page from '../../router/page';

const Page404: React.FC = () => {
  return <div>页面不存在，
      <Link page={Page.Index}>点击返回首页</Link>
    </div>;
};

export default Page404;
