const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;

const BACKEND_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}`;
const BACKEND_API = `${BACKEND_URL}/api`;

export const SIGN_UP_URL = `${BACKEND_API}/register/`;
export const SIGN_IN_URL = `${BACKEND_API}/token/`;
