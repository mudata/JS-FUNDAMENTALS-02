function solve(arr) {
    let newarr=arr;
   //console.log(newarr)
    let all=[];
    for (const elements of newarr) {
        const el=elements.split(" | ")
        let obj={
            town:el[0],
            latitude:Number(el[1]).toFixed(2),
            longitude:Number(el[2]).toFixed(2)
        };
        //all.push(obj);
        console.log(obj)
    }
    
    //console.log(all)
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);