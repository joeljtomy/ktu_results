const axios = require("axios");
const {
  SCRAPE_CONFIG,
  API_URL,
  RESULT_LOADING_API,
} = require("../../constants/ktuConstants");

async function getIndividualResult(payload) {
  try {
    const { data, status } = await axios.post(
      `${API_URL}${RESULT_LOADING_API}`,
      payload,
      SCRAPE_CONFIG
    );

    const result = {
      id: data.registerNo,
      fullName: data.fullName,
      grades: data.resultDetails.map(
        ({ courseName, credits, grade, description }) => {
          return { courseName, credits, grade, description };
        }
      ),
    };

    return { status, data: result };
  } catch (error) {
    console.log(error.message);
    return { status: error.statusCode };
  }
}

module.exports = getIndividualResult;
