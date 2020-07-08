function solve(arr) {
    let obj={};
    //console.log(arr.length)
    for (let i = 0; i < arr.length; i++) {
        let input=arr[i].split(" ");
        //console.log(input)
        let name=input[0];
        let number=input[1];
        obj[name]=number;
        
        
    }
    //console.log(obj)
    for (const name in obj) {
        console.log(name+ " => " +obj[name]); 
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);