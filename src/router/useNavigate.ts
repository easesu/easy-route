import { useCallback } from "react";
import {
  NavigateOptions,
  useNavigate as useReactRouterNavigate,
} from "react-router-dom";
import { ExtractPathParamDefinition } from "./definition";
import Page from "./page";
import { generatePath, isPageWithParams } from "./util";

type NavigateArgs<T extends Page> = ExtractPathParamDefinition<T> extends never
  ? [T, NavigateOptions?]
  : [T, ExtractPathParamDefinition<T>, NavigateOptions?];

const useNavigate = () => {
  const reactRouterNavigate = useReactRouterNavigate();
  const navigate = useCallback(<T extends Page>(...args: NavigateArgs<T>) => {
    let options: NavigateOptions | undefined;
    const generatePathArgs: any = [args[0]];
    if (isPageWithParams(args[0])) {
      generatePathArgs.push(args[1]);
      options = args[2];
    } else {
      options = args[1];
    }
    const routePath = generatePath<T>(...generatePathArgs);
    if (routePath) {
      reactRouterNavigate(routePath, options);
    }
  }, []);

  return navigate;
};

export default useNavigate;
