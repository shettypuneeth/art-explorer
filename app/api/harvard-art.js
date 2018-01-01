// @flow
import { 
  API_KEY,
  BASE_URL,
} from "../config/environment";

import { getRequest } from "../utils/requests";

type Options = {
  keyword?: string,
  fields?: string,
  size?: number,
  sort?: string,
  sortorder?: string
};
type Response = {
  info: Object,
  records: Array<Object>
}

// Poor man's cache to try and avoid crossing API's daily threashold
const getCacheKey = (keyword: string): string => {
  if (!keyword.trim()) return '__default__';

  return keyword.toLowerCase().trim().replace(' ', '_');
};

const CACHE = {};

const DEFAULT_SORT_BY_VIEWS = 'totalpageviews';
const DEFAULT_SORT_ORDER = 'desc';
const DEFAULT_SIZE = 10;
const DEFAULT_FILEDS = '*'

export const fetchArtifacts = async (options: Options): Promise<Response> => {
  const {
    keyword = '',
    size = DEFAULT_SIZE,
    fields = DEFAULT_FILEDS,
    sort = DEFAULT_SORT_BY_VIEWS,
    sortorder = DEFAULT_SORT_ORDER
  } = options;

  // check if the data is in cache
  const cacheKey = getCacheKey(keyword);
  if (CACHE.hasOwnProperty(cacheKey)) return CACHE[cacheKey];

  const params = {
    apikey: API_KEY,
    fields,
    sort,
    sortorder,
    size,    
    keyword
  };

  const requestOptions = {
    url: BASE_URL,
    params
  }

  const results = await getRequest(requestOptions);

  // update the cache
  CACHE[cacheKey] = results;

  return results;
}
