const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date)
    return 'Unable to determine the time of year!'
  if(!(date instanceof Date) || Object.keys(date).length)
    throw new Error('Invalid date!')
  let resData = date.getMonth()
  if(resData >= 11 || resData <= 1)
    return 'winter'
  if(resData >= 2 && resData <= 4)
    return 'spring'
  if(resData >= 5 && resData <= 7)
    return 'summer'
  if(resData >= 8 && resData <= 10)
    return 'autumn'
}

module.exports = {
  getSeason
};
