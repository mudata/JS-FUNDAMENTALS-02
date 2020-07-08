function solve(input) {
    let patern=/\@(?<name>[a-zA-Z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<atacktype>[AD])![^@\-!:>]*->(?<soldiercount>\d+)/;
    let nums=+input.shift();
    let atackedPlanets=[];
    let destroyesPlantes=[]
    for (let i = 0; i < nums; i++) {
        let element=input.shift();
        let newelemnt=[];
        let sum=0;
        let lowerelement=element.toLowerCase();
        for (let j = 0; j < lowerelement.length; j++) {
            const element1 = lowerelement[j];
            if(element1==="s"||element1==="t"||element1==="a"||element1==="r"){
                sum++;
            }
            
        }
        for (let m = 0; m < element.length; m++) {
            let element5 = element[m];
            let x=element5.charCodeAt(0);
            x=x-sum;
            let y=String.fromCharCode(x);
            newelemnt.push(y)
        }
        newelemnt=newelemnt.join("");
        //console.log(newelemnt)
        newelemnt=newelemnt.toString();
        let matches=newelemnt.match(patern);
        if(matches!==null){
let name=matches[1];
let population=matches[2];
let atacktype=matches[3];
let soldiercount=matches[4];
//console.log(name,population,atacktype,soldiercount)
if(atacktype==="A"){
    atackedPlanets.push(name);
}
else{
    destroyesPlantes.push(name)
}
        }
        
        
    }
    atackedPlanets.sort((a,b)=>{
        return  a.localeCompare(b);
            });
    console.log("Attacked planets: "+atackedPlanets.length);
    atackedPlanets.forEach(element => {
        console.log("-> "+element)
    });
    destroyesPlantes.sort((a,b)=>{
return  a.localeCompare(b);
    });
    console.log("Destroyed planets: "+destroyesPlantes.length);
    destroyesPlantes.forEach(element => {
        console.log("-> "+element)
    });
}

solve([
    '3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
  ]);