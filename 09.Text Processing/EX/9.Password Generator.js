function solve(arr) {
    let firstWord=arr[0].split("");
    let secondWord=arr[1].split("");
    arr[2]=arr[2].toUpperCase();
    let thirdWord=arr[2].split("");
    //thirdWord=thirdWord.toUpperCase();
    let bukva;
   //console.log(thirdWord)
    for (let i = 0; i < firstWord.length; i++) {
        if(firstWord[i]==="a"||
        firstWord[i]==="e"||
        firstWord[i]==="i"||
        firstWord[i]==="o"||
        firstWord[i]==="u"){
            firstWord[i]=thirdWord[0];
            bukva=thirdWord.shift();
            thirdWord.push(bukva);
        }
        
    }
    for (let i = 0; i < secondWord.length; i++) {
        if(secondWord[i]==="a"||
        secondWord[i]==="e"||
        secondWord[i]==="i"||
        secondWord[i]==="o"||
        secondWord[i]==="u"){
            secondWord[i]=thirdWord[0];
            bukva=thirdWord.shift();
            thirdWord.push(bukva);
        }
        
    }

    console.log("Your generated password is "+secondWord.reverse().join("")+firstWord.reverse().join(""))

}

solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);
//A E I O U