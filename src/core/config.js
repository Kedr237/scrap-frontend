const ENV_FILE = "./../../.env";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT;
const BACKEND_API = `http://${BACKEND_URL}:${BACKEND_PORT}/api`

export const SIGN_UP_URL = `${BACKEND_API}/register`;
