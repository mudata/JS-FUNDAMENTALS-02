function solve(firstName,secondName,age) {
    let person={};
    person.firstName=firstName;
    person.lastName=secondName;
    person.age=age;
    for (const key in person) {
        console.log(`${key}: ${person[key]}`)
    }

}

solve("Peter", 
"Pan",
"20");