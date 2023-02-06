let usd = 36.6;
let eur = 39.9;
let gbp = 44.8;
let pln = 8.5;
let chf = 40;

let uah = prompt('Введите сумму для обмена:');

let rateusd = (uah / usd);
let rateeur = (uah / eur);
let rategbp = (uah / gbp);
let ratepln = (uah / pln);
let ratechf = (uah / chf);

console.log(uah + ' грн ' + ' = ' + rateusd + ' долларов ');
console.log(uah + ' грн ' + ' = ' + rateeur + ' евро ');
console.log(uah + ' грн ' + ' = ' + rategbp + ' фунтов стерлингов ');
console.log(uah + ' грн ' + ' = ' + ratepln + ' злотых ');
console.log(uah + ' грн ' + ' = ' + ratechf + ' франков ');