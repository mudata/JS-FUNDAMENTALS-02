function solve(input) {
    let patern=/%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d*)\|[^|$%.]*?(?<price>\d+\.*\d*)\$/;
let line=input.shift();
let sum=0;
while (line!=="end of shift") {
    let matches=line.match(patern);
    if(matches!==null) {
        let name1=matches[1];
        let product1=matches[2];
        let quantity1=matches[3];
        let price1=matches[4];
        sum+=quantity1*price1;
        console.log(name1+": "+product1+" - "+(quantity1*price1).toFixed(2) );
    }
    line=input.shift();
    
}

console.log("Total income: "+sum.toFixed(2))
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]);