function solve(input) {
    let garages=new Map();
    input.forEach(element => {
        let garageNumber=element.split(" - ");
    
       if(!garages.has(garageNumber[0])){garages.set(garageNumber[0],[])}
    });
    //console.log(garages)
    for (const iterator of input) {
        let x=iterator.split(" - ");
        let numberGarage=x[0];
        let info=x[1]
        if(garages.has(numberGarage)){
            garages.get(numberGarage).push(info);
        }
        // info.forEach(element => {
        //     let y=element.split(": ")
        //     let carKey=y[0];
        //     let carValue=y[1];
        //     console.log(carKey+":::"+carValue);
        // });
        
        //console.log(numberGarage+info)
    }
    //console.log(garages[1])
    
    
    
    //console.log(garages)
    for (const iterator of garages) {
        let br=0;
        console.log("Garage № "+iterator[0])
        let newarr=[];
            let arr=iterator[1];
        for (let i = 0; i < arr.length; i++) {
            //console.log(arr[i].split(", "));
            let splited=arr[i].split(", ");
            let element;
            newarr=[];
            splited.forEach(element => {
                
                element= element.replace(/:/g, ' -');
                
                //console.log(element)
                newarr.push(" "+element);
            });
            console.log(`---${newarr}`)
            //console.log(`--- ${element.replace(":"," -")}`);
            br++;
    
    }
}
}
solve(['1 - color: blue, fuel type: diesel',
 '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
   '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
