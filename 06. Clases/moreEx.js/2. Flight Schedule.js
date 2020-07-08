function solve(arr) {
    let flights={};
    let array=[];
    let index1=arr.shift();
    for (let i = 0; i < index1.length; i++) {
        const element = index1[i].split(" ");
        let flights={};
        flights.number=element[0];
        flights.Destination=element[1];
        flights.Status="";
        array.push(flights);
        
    }
    //console.log(array)
    let index2=arr.shift();
    for (let i = 0; i < index2.length; i++) {
        const element = index2[i].split(" ");
        for (const key in array) {
            if(array[key].number===element[0]){
                array[key].Status="Cancelled";
            }
        }
        
    }
    //console.log(array)
    let index3=arr.shift().join('');
    if(index3==="Cancelled"){
        for (const key in array) {
            if(array[key].Status==="Cancelled"){delete array[key].number;
                console.log(array[key]);
            }
        }
    }
    else if(index3==="Ready to fly"){
        for (const key in array) {
            if(array[key].Status===""){
                delete array[key].number;
                array[key].Status="Ready to fly";
                console.log(array[key]);
            }
        }
    }
}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]);