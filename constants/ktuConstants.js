const https = require("https");
const API_URL = "https://api.ktu.edu.in/ktu-web-service";
const API_URL_KTU_WEB_PORTAL_API = "https://api.ktu.edu.in/ktu-web-portal-api";
const ANNOUNCEMENT_LOADING_API = "/anon/announcemnts";
const RESULT_LISTING_API = "/anon/result";
const RESULT_LOADING_API = "/anon/individualresult";
const NOTIFICATION_LOADING_API = "/anon/notifications";
const SCRAPE_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
};

module.exports = {
  API_URL,
  API_URL_KTU_WEB_PORTAL_API,
  ANNOUNCEMENT_LOADING_API,
  RESULT_LISTING_API,
  RESULT_LOADING_API,
  NOTIFICATION_LOADING_API,
  SCRAPE_CONFIG,
};
