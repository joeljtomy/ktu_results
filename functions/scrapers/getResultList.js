const axios = require("axios");
const {
  API_URL,
  RESULT_LISTING_API,
  SCRAPE_CONFIG,
} = require("../../constants/ktuConstants");

async function getResultList() {
  const payload = { program: 1 };

  try {
    const response = await axios.post(
      `${API_URL}${RESULT_LISTING_API}`,
      payload,
      SCRAPE_CONFIG
    );

    const result_List = response.data.map(
      ({ examDefId, id, publishDate, resultName, schemeId }) => ({
        examDefId,
        id,
        publishDate,
        resultName,
        schemeId,
      })
    );

    return {
      status: response.status,
      data: result_List,
    };
  } catch (error) {
    console.log(error.message);
    return { status: error.statusCode };
  }
}

module.exports = getResultList;
