function solve(arr) {
    let movies=[];

    while (arr.length>0) {
        let line=arr.shift();
        let tokens=line.split(" ");

        if(tokens.includes("addMovie")){
        tokens.shift();
        let movieName=tokens.join(" ");
        let movie={name:movieName};
        movies.push(movie);
        }
        else if(tokens.includes("directedBy")){
            let index=tokens.indexOf("directedBy");
            let name=tokens.slice(0,index).join(" ");
            let director=tokens.slice(index+1,tokens.length).join(" ");
            for (const movie of movies) {
                if(movie.name===name){
                    movie.director=director;
                }
            }

        }
        else if(tokens.includes("onDate")){
            let index=tokens.indexOf("onDate");
            let name=tokens.slice(0,index).join(" ");
            let date=tokens.slice(index+1,tokens.length).join(".");
            for (const movie of movies) {
                if(movie.name===name){
                    movie.date=date;
                }
            }
        }

    }

for (const movie of movies) {
    if(Object.keys(movie).includes('director')&&
    Object.keys(movie).includes('date')&&
    Object.keys(movie).includes('name')){
console.log(JSON.stringify(movie))
    }
}


}
console.log(solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]));