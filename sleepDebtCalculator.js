# SleepDebtCalculator
Sleep Debt Calculator coded in JavaScript from CodeCademy
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 8;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error";
  }
};
const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
};
const getIdealSleepHours = () => {
  var idealHours = 8.5;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealHours = getIdealSleepHours(8.5);
  if (actualSleepHours === idealHours) {
    console.log(
      `You are getting the perfect amount of sleep (${actualSleepHours} hours)`
    );
  } else if (actualSleepHours < idealHours) {
    console.log(
      `You are not getting enough sleep (${actualSleepHours} hours), you are getting ${
        idealHours - actualSleepHours
      } less hours than you should.`
    );
  } else if (actualSleepHours > idealHours) {
    console.log(
      `You are getting too much sleep (${actualSleepHours} hours), you are sleeping ${
        actualSleepHours - idealHours
      } more than you should.`
    );
  } else {
    console.log(`Error`);
  }
};
//Test entire funtion
calculateSleepDebt();
