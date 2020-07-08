function solve(word,line) {
    let newword=word.toLowerCase();
    line=line.toLowerCase();
    let index=line.indexOf(newword);
    if(index>=0){console.log(word);}
    else{console.log(`${word} not found!`)}
}

solve('javascript',
'JavaScript is the best programming language');