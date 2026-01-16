export const LOGO =
  'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const USER_AVATAR =
  'https://occ-0-1339-1340.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201';

export const LOGIN_BG =
  'https://assets.nflxext.com/ffe/siteui/vlv3/ce462eb6-4d7f-4c9a-9f61-93cb535a64fd/web/US-en-20260105-TRIFECTA-perspective_036b5cbc-d76f-49ac-af5e-93bb0d612737_large.jpg';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = 'https://image.tmdb.org/t/p/w500';

export const SUPPORTED_LANGUAGES = [
  { identifier: 'en', label: 'English' },
  { identifier: 'fr', label: 'French' },
  { identifier: 'hindi', label: 'Hindi' },
  { identifier: 'esp', label: 'Spanish' },
];

export const DEFAULT_LANGUAGE = 'en';

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const GPT_ERR_MSG =
  'Something went wrong. The AI did not return a valid response.';
