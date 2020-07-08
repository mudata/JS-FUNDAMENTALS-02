function solve(arr) {
    let studentName="";
    let grade=0;
    let score=0;
    
    let masiv=[];
    while (arr.length>0) {
        let firstRow= arr.shift().split(",");
        let br=1;
        let info={};
        firstRow.forEach(element => {

            element.split(" ");
            let new1=element.split(": ")
            if(br===1){studentName=new1[1];}
            if(br===2){grade=Number(new1[1]);}
            if(br===3){score=Number(new1[1]);}
            br++;
        });
        // console.log(studentName)
        // console.log(grade);
        // console.log(score)
        if(score>=3){
            for (let i = 0; i < masiv.length; i++) {
                const element = masiv[i];
                //info.grade1=grade+1;
                for (let j = 0; j < masiv.length; j++) {
                    //const element2 = array[j];
                    if(element.grade1===grade+1){
                        console.log("suvpadnei")
                    }
                }
                console.log(element.grade1)
            }
            info.grade1=grade;
            info.score1=score;
            info.studentName1=studentName;
            masiv.push(info);
            console.log()
        }
        else{
            grade=0;
            score=0;
            studentName="";
        }
     
        
    }
    //console.log(masiv);
}

solve([
    'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00'
  ]);