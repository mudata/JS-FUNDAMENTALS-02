function solve(arr) {
    let newarr=[];
    for (let i = 1; i <= arr.length; i+=2) {
        let resource=arr[i-1];
        let quantity=Number(arr[i]);
        //console.log(resource);
        //console.log(quantity)
        let obj={};
        //console.log(element)
        
            if(i===1){
                obj.resource1=resource;
                obj.quantity1=quantity;
                newarr.push(obj)
            }
            else{
                // if (Object.values(obj).indexOf('test1') > -1) {
                //     console.log('has test1');
                //  }
                let b=true;
                for (let j = 0; j < newarr.length; j++) {
                    if(newarr[j].resource1===resource){
                        b=false;
                        newarr[j].quantity1=quantity +newarr[j].quantity1;
                        break;
                    }
                    
                }
                if(b){
                    obj.resource1=resource;
                obj.quantity1=quantity;
                newarr.push(obj)
                }
                
            }
            //console.log(element);
        }
        //console.log(newarr)
    
        for (const iterator of newarr) {
            console.log(iterator.resource1+" -> "+iterator.quantity1)
        }
}

solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);