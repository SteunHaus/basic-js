//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    
  if (typeof(sampleActivity) != 'string' || sampleActivity == undefined) return false;
  if (+sampleActivity == NaN || +sampleActivity <= 0 || +sampleActivity > 15) return false;
  
  if (Number.isFinite(+sampleActivity)) {
    const k = 0.693/HALF_LIFE_PERIOD;
    let t = (Math.log(MODERN_ACTIVITY/+sampleActivity))/k;
    t = Math.ceil(t);
    
    return t;
  } else return false;

};
