function solve(arr) {
    let comand = "";
    let newarr = [];
    let totalSum;
    let index=0;
    let value;
    do {
        let c;
        let b;
        comand = arr.shift().split(" -> ");
        let vs=comand[0].split(" ");
        //console.log(vs)
        if(vs[1]==="vs"){
            b=false;
            c=false;
            console.log("ddd");
            for (let i = 0; i < newarr.length; i++) {
                if(newarr[i].includes(vs[0])){b=true;
                break;}
                if(newarr[i].includes(vs[2])){c=true;break;}
                
            }
            if(c){
                if(b){console.log("sss"+vs[0]+vs[2]);}
                
            }
            if(b){
                if(c){console.log("sss"+vs[0]+vs[2]);}
                
            }
            break;
        }
        if (comand[0] === "Ave Cesar") break;
        let array=[];
        let gladiator = comand[0];
        let technique = comand[1];
        let skill = Number(comand[2]);
        let obj = {};
        if (newarr.length === 0) {

            totalSum=skill;
            array.push(gladiator);
            array.push(totalSum);
            array.push(technique);
            array.push(skill);
            newarr.push(array);

        }
        else {
            let b=true;
            for (let i = 0; i < newarr.length; i++) {
                //console.log(newarr[i])
                if(newarr[i].includes(gladiator)){
                    if(!newarr[i].includes(technique)){
                        newarr[i][1]+=skill;
                        newarr[i].push(technique);
                        newarr[i].push(skill);
                        b=false;
                        break;
                    }
                    // else{
                    //     index=newarr[i].indexOf(technique+1);
                    //     value=index;
                    //     if(value<skill){newarr[i]=skill;}
                    // }
                }
                
            }
            if(b){totalSum=skill;
                array.push(gladiator);
                array.push(totalSum);
                array.push(technique);
                array.push(skill);
                newarr.push(array);}
        }
        

    } while (comand !== 'Ave Cesar')
    //console.log("dd")
    //console.log(newarr)
    newarr.sort((a,b)=>a[1]-b[1]);
    newarr.sort((a,b)=>b[0].localeCompare(a[0]));
    console.log(newarr)

}
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);