const envs = process.env;

let STAGING, API_HOST;

if (envs.REACT_APP_ENV === "DEVELOPMENT") {
  API_HOST = "http://localhost:3000";
} else if (envs.REACT_APP_ENV === "PRODUCTION") {
  STAGING = false;
  API_HOST = "https://library-management-api-rails.herokuapp.com";
}

export { STAGING, API_HOST };
