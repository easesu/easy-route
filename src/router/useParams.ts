import { useMemo } from 'react';
import { useParams as useReactRouterParams } from 'react-router-dom'
import { extractParams } from './util';
import Page from './page';

const useParams = <T extends Page>(page: T) => {
    const originalParams = useReactRouterParams();
    
    const params = useMemo(() => {
        return extractParams(page, originalParams);
    }, [originalParams]);
    
    return params;
}

export default useParams;