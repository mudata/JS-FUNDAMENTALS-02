function solve(input) {

let companies={};
for (let line of input) {
    
    line=line.split(" -> ");
    let companyName=line[0];
    let id=line[1];

    if(!companies.hasOwnProperty(companyName)){
        companies[companyName]=new Set();
    }
        companies[companyName].add(id);
        
}
let sot=Object.entries(companies)
console.log(sot)
sot.sort((a,b)=>a[0].localeCompare(b[0]))
console.log(sot)
// for (const iterator of sot) {
//     console.log(iterator[0])
//     for (const x of iterator[1]) {
//         console.log("-- "+x)
//     }
// }
    

}
solve([
    "SoftUni -> AA12345",
    "SoftUni -> CC12344",
    "Lenovo -> XX23456",
    "SoftUni -> AA12345",
    "Movement -> DD11111"
    ]);