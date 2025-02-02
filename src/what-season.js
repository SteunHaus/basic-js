const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (!date.getMonth || !date.getDate) return false;
  if (date == null) throw new CustomError('THROWN');

  let month = date.getMonth();

  if (month > 1 && month < 5) return 'spring';
  else if (month > 4 && month < 8) return 'summer';
  else if (month > 7 && month < 11) return 'autumn';
  else return 'winter';
};
