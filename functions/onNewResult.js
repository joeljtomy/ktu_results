const Result = require("../schemas/result");
const ResultNotification = require("../schemas/resultNotification");
const User = require("../schemas/user");
const getIndividualResult = require("./scrapers/getIndividualResult");

async function onNewResult(newResult) {
  const USERS = await User.find({});
  let payload = {
    registerNo: USERS[36].id,
    dateOfBirth: USERS[36].dob,
    examDefId: newResult.examDefId,
    schemeId: newResult.schemeId,
  };

  try {
    const response = await getIndividualResult(payload);

    if (response.status == 200) {
      await ResultNotification.deleteMany({});
      new ResultNotification(newResult).save();
      await Result.deleteMany({});
      let results = [];

      for (const user of USERS) {
        payload = {
          ...payload,
          registerNo: user.id,
          dateOfBirth: user.dob,
        };

        try {
          const response = await getIndividualResult(payload);

          if (response.status == 200) {
            results = [...results, response.data];
          }
        } catch (error) {
          console.error(error);
        }
      }

      await Result.insertMany(results);
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = onNewResult;
