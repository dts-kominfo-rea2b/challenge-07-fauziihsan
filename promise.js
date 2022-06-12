const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (data) => {
  try {
    const [dtIXX, dtVGC] = await Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    const result = [...dtIXX, ...dtVGC]

    return result?.filter(item => item.hasil === data)?.length || 0
  } catch (error) {
    console.log("error: " + error.message);
  }
}

module.exports = {
  promiseOutput,
};
