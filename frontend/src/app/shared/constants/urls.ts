const BASE_URL = process.env.BASE_URL;

export const FOODS_URL = `${BASE_URL}/api/foods`;
export const FOODS_TAGS_URL = `${FOODS_URL}/tags`;
export const FOODS_BY_SEARCH_URL = `${FOODS_URL}/search/`;
export const FOODS_BY_TAG_URL = `${FOODS_URL}/tag/`;
export const FOODS_BY_ID_URL = `${FOODS_URL}/`;

export const USERS_SIGN_IN_URL = `${BASE_URL}/api/users/sign-in`;
export const USERS_SIGN_UP_URL = `${BASE_URL}/api/users/sign-up`;

export const ORDER_URL = `${BASE_URL}/api/orders`;
export const ORDER_CREATE_URL = `${ORDER_URL}/create`;
export const ORDER_NEW_FOR_CURRENT_USER_URL = `${ORDER_URL}/newOrderForCurrentUser`;
export const ORDER_PAY_URL = `${ORDER_URL}/pay`;
export const ORDER_TRACK_URL = `${ORDER_URL}/track/`;
