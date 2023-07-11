import { useCallback, useMemo } from "react";
import { ExtractPathParam, ExtractPathParamDefinition } from "./definition";
import Page from "./page";
import useNavigate from "./useNavigate";
import { generatePath } from "./util";

export type LinkProps<T extends Page = Page> = {
  className?: string;
} & (ExtractPathParam<T> extends never
  ? {
      page: T;
      params?: any;
    }
  : {
      page: T;
      params: ExtractPathParamDefinition<T>;
    });

const Link = <T extends Page>(
  props: React.PropsWithChildren<LinkProps<T>>
): React.ReactElement => {
  const navigate = useNavigate();

  const link = useMemo(() => {
    return generatePath(props.page as any, props.params as any);
  }, [props.page, props.params]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    navigate(props.page, props.params);
  }, [props.page, props.params]);

  return (
    <a className={props.className} href={link} onClick={handleClick}>
      {props.children}
    </a>
  );
};

export default Link;
