const { DateTime, Interval } = require('luxon');

const now = DateTime.now();
console.log(now);
console.log(now.month);
console.log(new Date().toLocaleString('pt-br'));
console.log(new Date().toLocaleString('en-US'));
console.log(new Date().getMonth()); //! FUNCIONA COM INDICE 0, OU SEJA, JANEIRA SERA MES

const birthdayDate = DateTime.fromFormat('26/04/1995', 'dd/MM/yyyy');

console.log(birthdayDate);
console.log(birthdayDate.day);
console.log(birthdayDate.month);

const age = Interval.fromDateTimes(birthdayDate, now).length('year'); //!CALCULA IDADE
console.log(Math.floor(age));



