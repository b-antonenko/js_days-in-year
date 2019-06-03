'use strict';

function daysInYear(year) {
  try {
      if (Number.isInteger(year)) {
          let feb = new Date(year, 1, 29).getDate();
          if (feb === 29) {
              return console.log(366);
          }
          else {
              return console.log(365);
          }
      }
      else
          return (console.log('Exception'));
  }
  catch(error) {
      console.log('Error')
  };
}
daysInYear('2009');
daysInYear(2019);
daysInYear(2010);
daysInYear(2000);
daysInYear('2019');
daysInYear(1);