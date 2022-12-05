//Tip calculator
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// creation des tab tips et totaux
const tips = calcTips(bills);
const totals = calcTotals(bills);
//const totals = [];

function calcTips(bills)
{
    const tips=[];
    for (let i=0; i< bills.length; i++) {
        const tip = bills[i] * 15 / 100;
        tips.push(tip);
        //
    }
    return tips;

}

function calcTotals(bills)
{
    const totals=[];
    for (let i=0; i< bills.length; i++) {
        const total = bills[i] + tips[i];
        totals.push(total);
        //
    }
    return totals;

}

function calcAverage(numbersAverage)
{
    let sum = 0;
    const totals=[];
    for (let i=0; i< numbersAverage.length; i++) {
        sum+= totals[i]
        //
    }
    return totals;

}

console.log(calcTips(bills));
//console.log(tips);
console.log(totals);




