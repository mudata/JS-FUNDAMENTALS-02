function solve(input1) {
    //let input=input1
    let first=input1.substr(0,input1.length/2);
    //console.log(first)
    let second=input1.substr(input1.length/2,input1.length);
    //console.log(second);
    console.log(Array.from(first).reverse().join(""));
    console.log(Array.from(second).reverse().join(""));
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');