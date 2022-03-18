const { nextISSTimesForMyLocation, printPassTimes } = require('./iss_promised');
//process.env.NODE_TLS_REJECT_UNAUTHORIZED = false;

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  }).catch((error) => {
    console.log("It didn't work: ", error.message);
  });