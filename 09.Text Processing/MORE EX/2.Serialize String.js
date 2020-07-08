function solve(input) {
    let arr=input[0].split("");
    let mapped=new Map();
    arr.forEach(element => {
        mapped.set(element,[]); 
    });
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element==="a"){
            mapped.get(element).push(i);
        }
        else{
            mapped.get(element).push(i);
        }
        
    }
    for (const iterator of mapped) {
        console.log(iterator[0]+":"+iterator[1].join("/"))
    }
}

solve([ 'abababa', '' ]);