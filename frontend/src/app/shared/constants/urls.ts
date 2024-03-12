import { environment } from "../../../environments/environment";
console.log(environment.production);

const BASE_URL = environment.apiUrl;

export const FOODS_URL = `${BASE_URL}/api/foods`;
export const FOODS_TAGS_URL = `${FOODS_URL}/tags`;
export const FOODS_BY_SEARCH_URL = `${FOODS_URL}/search/`;
export const FOODS_BY_TAG_URL = `${FOODS_URL}/tag/`;
export const FOODS_BY_ID_URL = `${FOODS_URL}/`;
