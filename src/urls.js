// Define your base URL here
const BASE_URL = 'https://url-shortener-be-xqje.onrender.com/api';

// Export the URLs for different endpoints
const URLs = {
  LOGIN: `${BASE_URL}/users/login`,
  REGISTER: `${BASE_URL}/users/register`,
  FORGOT_PASSWORD: `${BASE_URL}/users/forgot-password`,
  RESET_PASSWORD: `${BASE_URL}/users/reset-password`,
  USER_PAGE: `${BASE_URL}/users/user-page`, 
};

export default URLs;
