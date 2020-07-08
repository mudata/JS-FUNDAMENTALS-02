function solve(input) {
    let print=input.split("\\");
    let current= print[print.length-1];
    let x=current.split(".");
    console.log(`File name: ${x[0]}`)
    console.log(`File extension: ${x[1]}`)
}

solve('C:\\Internal\\training-internal\\Template.pptx');