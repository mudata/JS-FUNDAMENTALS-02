function solve(input) {
    let paternLetters = /[^\d\W]+/g;
    let paternNums=/\d/g;
    let names = input.shift();
    let line = input.shift();

    let people={};
    while (line !== "end of race") {
        let resultname = line.match(paternLetters);
        let resultNums=line.match(paternNums);
        resultname=resultname.join("")
        let sum=0;
        resultNums.forEach(element => {
            sum+=+element;
        });
        //console.log(resultname)
        if(names.includes(resultname)){
            if(people.hasOwnProperty(resultname)){
                people[resultname].sum1+=sum;
            }
            else{
            people[resultname]={
                sum1:sum
            }
            }
        }
        //console.log(resultLetters.join(""));
        //console.log(resultNums.join(""));
        line=input.shift();
    }

    //console.log(people);
    let sorted=Object.entries(people);
    sorted.sort((a,b)=>{
        //console.log(a[1]);
        return b[1].sum1-a[1].sum1;
    });
    let count=0;
    for (const ss of sorted) {
        if(count===0)console.log(`1st place: ${ss[0]}`);
        if(count===1)console.log(`2nd place: ${ss[0]}`);
        if(count===2)console.log(`3rd place: ${ss[0]}`);
        count++;
    }
    //console.log(sorted)
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);