function solve(string,line) {
    let y=string.split(", ");
    let x=line.split(" ");
    for (let j = 0; j < y.length; j++) {
        let element = y[j];
        
        for (let i = 0; i < x.length; i++) {
            let element1 = x[i];
            //console.log(element)
            //console.log(element1)
            if(element1.length===element.length&&element1.includes("*")){
                //console.log("if")
                x[i]=element;
            }
        }
    }
    console.log(x.join(" "))
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');