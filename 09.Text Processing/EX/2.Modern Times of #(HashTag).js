function solve(input) {
    let x=input.split(" ");
    let arr=[];
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if(element.startsWith('#')&&element.length>1){arr.push(element.slice(1));}
        
    }
    arr.forEach(element => {
        console.log(element)
    });
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
