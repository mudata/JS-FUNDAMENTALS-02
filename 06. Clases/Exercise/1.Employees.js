function solve(arr) {
    let employees=[];
for (const personsName of arr) {
    let personObj={
        name:personsName,
        personalNumber:personsName.length
    };

    employees.push(personObj);
}
for (const employe of employees) {
    console.log(`Name: ${employe.name} -- Personal Number: ${employe.personalNumber}`)
}

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);