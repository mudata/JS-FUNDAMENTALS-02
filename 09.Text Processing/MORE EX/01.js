function solve(input) {
    let newstr=input[0].replace(/[^a-zA-Z ]/g, "");
    let arr=newstr.split("");
    let uppsum=0;
    let lowwsum=0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element===element.toUpperCase()){uppsum+=element.charCodeAt();}
        else{lowwsum+=element.charCodeAt();}
        
    }
    
    if(input[1]==="LOWERCASE"){console.log("The total sum is: "+lowwsum)}
    else{console.log("The total sum is: "+uppsum)}
    
}

solve([ 'HelloFromMyAwesomePROGRAM', 'LOWERCASE', '' ]);
