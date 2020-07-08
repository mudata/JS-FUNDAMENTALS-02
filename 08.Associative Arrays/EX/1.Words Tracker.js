function solve(arr) {
    let words=arr.shift().split(" ");
    let arrr=[]
    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        let words1={};
        words1["name"]=element;
        words1["howmany"]=0;
        arrr.push(words1)
    }
    for (let i = 0; i < words.length; i++) {
        // console.log(arrr[i].name)
        for (let j = 0; j < arr.length; j++) {
            const element = arr[j];
            if(arrr[i].name===element){arrr[i].howmany++;}
        }
        
    }
    arrr.sort((a,b)=>b.howmany-a.howmany);
    //console.log(arrr)
    arrr.forEach(element => {
        console.log(element.name+" - "+element.howmany)
    });
}

solve([
    'this sentence',
     'In',
     'this'
     ,'sentence'
     ,'you',
     'have',
     'to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);