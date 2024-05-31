const onNewResult = require("./onNewResult");
const getResultList = require("./scrapers/getResultList");
const cmpArray = require("./utils/cmpArray");

const DELAY = 1000 * 30,
  ERROR_TIMEOUT = 1000 * 60 * 5;

let oldResultList = [];
let count = 0;
let PollingOn = false;
let first = true;

async function pingKtu() {
  if (PollingOn) return;
  PollingOn = true;

  const interval = setInterval(async () => {
    const response = await getResultList();

    if (response.status != 200) {
      if (count > 3) {
        count = 0;
        PollingOn = false;
        clearInterval(interval);
        return setTimeout(pingKtu, ERROR_TIMEOUT);
      }
      return count++;
    }

    count = 0;
    newResultList = response.data;

    if (first) {
      oldResultList = newResultList;
      first = false;
      return;
    }

    const { different, newResult } = cmpArray(newResultList, oldResultList);

    if (different) {
      onNewResult(newResult);
      PollingOn = false;
      clearInterval(interval);
    }
  }, DELAY);
}

module.exports = pingKtu;
