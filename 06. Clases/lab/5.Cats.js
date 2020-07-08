function solve(arr) {
    //let cats=[];
    class Cat{
        constructor(name,age) {
            this.name=name;
            this.age=age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

for (let i = 0; i < arr.length; i++) {
    let catDate=arr[i].split(" ");
    let name, age;
    [name,age]=[catDate[0],catDate[1]];
    let cats=(new Cat(name,age));
    
    cats.meow();
}


}

solve(['Mellow 2', 'Tom 5']);