function solve(input) {

let obj={};

for (let i = 0; i < input.length; i++) {
    const element = JSON.parse(input[i]);
    let entry=Object.entries(element)[0];
    obj[entry[0]]=entry[1];
   
}
console.log(obj)
let sortedobj={};
for (const key of Object.keys(obj).sort((a,b)=>a.localeCompare(b))) {
    sortedobj[key]=obj[key]
}
for (const key in sortedobj) {
    console.log(`Term: ${key} => Definition: ${sortedobj[key]}`)
}
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);