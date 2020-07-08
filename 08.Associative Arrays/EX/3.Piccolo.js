function solve(arr) {
    let newarr=[];
    
    for (let i = 0; i < arr.length; i++) {
        let [direction, carNumber] = arr[i].split(", ");
        if(direction==="IN"){
            let bul=true;
            for (let k = 0; k < newarr.length; k++) {
                if(carNumber===newarr[k].number){
                    bul=false;
                }
                
            }
            if(bul){
                let car={};
            car.number=carNumber;
            car.direction=direction;
            newarr.push(car);
            }
            
        }
        else if(direction==="OUT"){
            
            for (let j = 0; j < newarr.length; j++) {
               
                if(carNumber===newarr[j].number){
                    delete newarr[j].number;
                    delete newarr[j].direction;
                }
                
            }
        }
    }
    //console.log(newarr)
    var newArray = newarr.filter(value => Object.keys(value).length !== 0);
    //console.log(newArray);
    if(newArray.length>0){
        let sorted=newArray.sort((a, b) => (a.number).localeCompare(b.number));
        for (const key in sorted) {
                console.log(sorted[key].number);
        }
    }
    else{
        console.log("Parking Lot is Empty")   
    }
    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2822UU',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);