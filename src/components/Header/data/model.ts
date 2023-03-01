import {IHeader} from '~/components/Header/data/interfaces';
import {RootState, useSelector, useDispatch} from '~/utils';
import {setQuery} from '~/redux/reducers/Search';

export const useHeader = (): IHeader.Model => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.Search.query);

  function updateQuery(text: string) {
    dispatch(setQuery(text));
  }

  return {
    query,
    updateQuery,
  };
};
