'use strict';

//1. feladat------------------------
const currDate = new Date();
const beginOfYear = new Date();
beginOfYear.setMonth(0);
beginOfYear.setDate(1);
console.log(beginOfYear);
const elapsedSec = (currDate - beginOfYear) / 1000;
console.log(elapsedSec, 'sec');


//2. feadat--------------------------


function workDays() {
    let wd = 0;
    let i = 1;
    let stepDate = beginOfYear;
    while (stepDate <= currDate) {
        if (stepDate.getDay() < 6 && stepDate.getDay() > 0) {
            wd++;
        }
        i++;
        stepDate.setMonth(0);
        stepDate.setDate(i);       
    }
    return wd;
}

console.log(workDays(), "workdays in this year since now");

function workDays2() {
    let wd = 0;
    let q = 0; //hányados
    let r = 0; //maradék
    let elapsedDays = ((currDate - beginOfYear) / 1000 / 60 / 60 / 24) + 1;
    
    q = Math.floor(elapsedDays / 7); //hányszor volt 5 munkanap
    r = elapsedDays - (q * 7);

    wd = q*5;

    const prevDate = new Date();

    for (let i = r - 1; i >= 0; i--) {
        prevDate.setDate(currDate.getDate() - i);
        if (prevDate.getDay() < 6 && prevDate.getDay() > 0) {
            wd++;
        }
    }
    
    return wd;
}

//console.log(workDays2());

const someDate = new Date();

function customDates(paraDate) {
    const monthNames = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
    const monthShortNames = monthNames.map(item => `${item.substr(0, 3)}.`);
    return ({
        short: `${paraDate.getFullYear()}. ${monthShortNames[paraDate.getMonth()]} ${paraDate.getDate()}. ${paraDate.getHours()}:${paraDate.getMinutes()}`,
        long: `${paraDate.getFullYear()}. ${monthNames[paraDate.getMonth()]} ${paraDate.getDate()}. ${paraDate.toLocaleTimeString('hu')}`
    });
}

console.log(customDates(someDate));
document.querySelector('body').insertAdjacentHTML('beforeend', customDates(someDate).short);
document.querySelector('body').insertAdjacentHTML('beforeend', '<br>');
document.querySelector('body').insertAdjacentHTML('beforeend', customDates(someDate).long);