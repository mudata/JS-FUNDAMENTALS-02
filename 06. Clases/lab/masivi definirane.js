//purvi nachin
let obj={
name:"pesho",
age:20,
};

//vtori nachin
let obj1={};
obj1.name="pesho";
obj1.age=20;

//treti nachin
// let obj2={};
// obj2["name"]="pesho";
// obj2["age"]=20;

// for (const key in obj1) {
//     console.log(`${key} "=" ${obj1[key]}`);
// }
let phonebook=new Map();
phonebook.set("pesho","04040");
phonebook.set("gosho","04040");
console.log(phonebook.get("pesho"));
console.log(phonebook.has("pesho"));
phonebook.delete("pesho");
console.log(phonebook);

