function solve(arr) {
    let array=[];
    
    for (let i = 0; i < arr.length; i++) {
        let input=arr.shift();
        let persons={};
        persons.name=input;
        persons.personalNumber=input.length;
        array.push(persons)
    }
    //console.log(array)
    for (const key in array) {
        console.log(array[key].name+" "+array[key].personalNumber)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);