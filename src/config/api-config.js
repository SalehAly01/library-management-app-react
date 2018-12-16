const envs = process.env;

let API_HOST;

if (envs.REACT_APP_ENV === "DEVELOPMENT") {
  API_HOST = "http://localhost:3000";
} else if (envs.REACT_APP_ENV === "PRODUCTION") {
  API_HOST = "https://library-management-api-rails.herokuapp.com";
}

export { API_HOST };
