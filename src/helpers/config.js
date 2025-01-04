const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;

const BACKEND_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;
export const BACKEND_API = `${BACKEND_URL}/api`;

export const SIGN_UP_URL = `/register/`;
export const SIGN_IN_URL = `/token/`;
export const REFRESH_URL = `/token/refresh/`;
