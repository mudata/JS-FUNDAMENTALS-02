function solve(line) {
    let arr=[];
    line=line.toLowerCase();
    let input=line.split(" ");
    //console.log(input);
    
    let newarr=[];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        let obj={};
        obj.name=element;
        obj.puti=1;
        newarr.push(obj)
    }
    //console.log(newarr)
    for (let i = 0; i < newarr.length; i++) {
        //console.log(newarr[i].name)
        for (let j = 0; j < newarr.length; j++) {

            if(newarr[i].name===newarr[j].name){
                //console.log(newarr)
                newarr[i].puti+=1;
                //newarr.splice(j,1);
                //console.log(newarr)
            }
        }
        
    }
    let array=[];
    for (const key in newarr) {
       if(newarr[key].puti%2===0){
           array.push(newarr[key].name);
       }
    }
    //console.log(array)
    let arre=[];
    let myset=new Set(array);
    //console.log(myset)
    for (const iterator of myset) {
        arre.push(iterator);
    }
    console.log(arre.join(" "))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');