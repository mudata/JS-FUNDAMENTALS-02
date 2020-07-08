function solve(arr) {
    let newarr=[];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i].split(" > ");
        let obj={};
        let countryName=element[0];
        let townName=element[1];
        let cost=Number(element[2]);
        if(i===0){
            obj.countryName=countryName;
            obj.townName=townName;
            obj.cost=cost;
            newarr.push(obj);
        }
        
        else{
            for (let j = 0; j < newarr.length; j++) {
                if(newarr[j].countryName===countryName){
                    if(newarr[j].townName===townName){
                        newarr[j].cost=cost;
                        break;
                    }
                    else{
                        //newarr[j].countryName1=countryName;
                        newarr[j].townName1=townName;
                        newarr[j].cost1=cost;
                        //newarr.push(obj);
                        break;
                    }
                    
                }
                else{
                        obj.countryName=countryName;
                        obj.townName=townName;
                        obj.cost=cost;
                        newarr.push(obj);
                        break;
                }
                
                
            }
        }
        
        
        //console.log(newarr);
        
    }
    newarr.sort((a,b)=>a.countryName.localeCompare(b.countryName));
    newarr.sort((a,b)=>a-b);
    //console.log(newarr);    
    for (const key in newarr) {
        if (newarr[key].townName1!==undefined) {
            console.log(newarr[key].countryName+" -> "+newarr[key].townName+" -> "+newarr[key].cost+" "+newarr[key].townName1+" -> "+newarr[key].cost1+" ");
   
        }
        else{
            console.log(newarr[key].countryName+" -> "+newarr[key].townName+" -> "+newarr[key].cost+" ");
        }
         }
        //if(iterator)
        
    

}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);