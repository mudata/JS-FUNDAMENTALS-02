function solve(arr) {
    let newarr=[];
    while (arr.length>0) {
        let bul=true;
        let obj={};
        let comand=arr.shift();
        //console.log(comand)
        let personName=comand.split(": ");
        let pt=personName[1].split(", ");
        //console.log(pt)
        personName=personName[0];
        //console.log(personName);
        pt=[...new Set(pt)];
        obj.name=personName;
        obj.card=pt;
        for (let i = 0; i < newarr.length; i++) {
            if(personName===newarr[i].name){
                bul=false;
                //console.log(pt)
                let rr=(Object.values(newarr[i].card));
                pt.forEach(element => {
                    rr.push(element);
                });
                rr=[...new Set(rr)];
                newarr[i].card=rr;
                //console.log(rr);
            }
            
        }
        if(bul){newarr.push(obj);}
        
        
        
    }
    //console.log(newarr);
    for (let i = 0; i < newarr.length; i++) {
        let sum=0;
        let line=newarr[i];
        line=line.card;
        //console.log(line)
        for (let j = 0; j < line.length; j++) {
            //console.log(sum)
            const element = line[j].split("");
            //console.log(element)
            let first,second;
            if(element.length===3){first=Number(element[0]+element[1]);
                second=element[2];
            }
            else if(element[0]>=0){first=Number(element[0]);
                second=element[1];}
            else{first=element[0];
                second=element[1];
            }
            
            
            //console.log(first,second)
            
            
            if(first===1){
                if(second==="S"){sum+=first*4;}
                else if(second==="H"){sum+=first*3;}
                else if(second==="D"){sum+=first*2;}
                else if(second==="C"){sum+=first*1;}
            }
            else if(first===2){
                if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===3){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===4){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===5){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===6){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===7){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===8){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===9){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}
            else if(first===10){if(second==="S"){sum+=first*4;}
            else if(second==="H"){sum+=first*3;}
            else if(second==="D"){sum+=first*2;}
            else if(second==="C"){sum+=first*1;}}

            else if(first==="J"){first=first.toString();
                if(second==="S"){sum+=11*4;}
            else if(second==="H"){sum+=11*3;}
            else if(second==="D"){sum+=11*2;}
            else if(second==="C"){sum+=11*1;}}

            else if(first==="Q"){first=first.toString();
                if(second==="S"){sum+=12*4;}
            else if(second==="H"){sum+=12*3;}
            else if(second==="D"){sum+=12*2;}
            else if(second==="C"){sum+=12*1;}}

            else if(first==="K"){first=first.toString();
                if(second==="S"){sum+=13*4;}
            else if(second==="H"){sum+=13*3;}
            else if(second==="D"){sum+=13*2;}
            else if(second==="C"){sum+=13*1;}}

            else if(first==="A"){first=first.toString();
                if(second==="S"){sum+=14*4;}
            else if(second==="H"){sum+=14*3;}
            else if(second==="D"){sum+=14*2;}
            else if(second==="C"){sum+=14*1;}}
            newarr[i].card=sum;

        } 
    }
    for (const key in newarr) {
        console.log(newarr[key].name+": "+newarr[key].card)
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Peter: JD, JD, JD, JD, JD, JD',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Andrea: QH, QC, QS, QD'
    ]);