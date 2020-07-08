function solve(input) {
    let neighborhoodsName=input.shift().split(", ");
    //console.log(neighborhoodsName)
    let neighborhoods = new Map();
    neighborhoodsName.forEach(name=>
        {
            neighborhoods.set(name,[]);
        });
        //console.log(input)
        for (let ops of input) {
            let hh=ops.split(" - ");
            let neighborhood=hh[0];
            let people=hh[1];
            
            if(neighborhoods.has(neighborhood)){
                neighborhoods.get(neighborhood).push(people);
            }
        }
        let arr=Array.from(neighborhoods);
        //console.log(arr);
        arr.sort((a,b)=>{
           return b[1].length-a[1].length;
        });
//console.log(arr)
for (const iterator of arr) {
    console.log(iterator[0]+": "+iterator[1].length)
    iterator[1].forEach(x=>console.log("--"+x))
}
    //console.log(neighborhoods);

}

solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);