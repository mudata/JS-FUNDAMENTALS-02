function solve(string) {
    let person=JSON.parse(string);
    //console.log(person)
    for (const key in person) {
        console.log(key,person[key])
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');