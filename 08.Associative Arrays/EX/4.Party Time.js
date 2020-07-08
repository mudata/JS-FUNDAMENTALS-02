function solve(arr) {
    let n=Number.MIN_SAFE_INTEGER;
    let newarr=[];
    let comand="";
    while (comand!='PARTY') {
        comand=arr.shift();
        if(comand==='PARTY'){break;}
        if(comand[0]>=n){
           if(!newarr.includes(comand)){
            newarr.push(comand);
            }
        }
        else{
            if(!newarr.includes(comand)){
            newarr.push(comand);
            }
        }
    }
//console.log(newarr);
//console.log(arr)
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element)
    for (let j = 0; j < newarr.length; j++) {
        const element2 = newarr[j];
        if(element===element2){
            let index=newarr.indexOf(element2);
            //console.log(newarr)
            newarr.splice(index,1);
            //console.log(newarr)
        }
        
    }
    
}
//newarr.sort((a,b)=>a.localeCompare(b))
console.log(newarr.length);
let ss=[];
newarr.forEach(element => {
    if(element[0]>=n){console.log(element);}
    else{ss.push(element);}
});
ss.forEach(element => {
    console.log(element)
});
}

solve(['m8rfQBvl',
'fc1oZCE0',
'0gffRkOn',
'7ugX7bm0',
'mCQBGUeJ',
'2FQZT3uC',
'7ziNz78I',
'6dSGyQCJ',
'LjcVpmDL',
'4PXNHpm1',
'3TTbwRmM',
'25yTkMQi',
'8N0FThqG',
'1ys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'1ziNz78I',
'2dSGyQCJ',
'2jcVpmDL',
'3PXNHpm1',
'4TTbwRmM',
'55yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);