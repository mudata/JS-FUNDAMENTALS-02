function solve(arr) {
    let array = [];
    let typeSong = arr.pop();
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name;
            this.time = time;
        }
    }
    let numberOfSongs = Number(arr.shift());
    for (let i = 0; i < numberOfSongs; i++) {
        let input = arr.shift().split("_");
        let a = input[0];
        let b = input[1];
        let c = input[2];
        //console.log(a,b,c)
        let song = new Song(a, b, c);
        array.push(song);

    }
    //console.log(array)
    //console.log(typeSong)
    if(typeSong==="all"){
        array.forEach(element => {
            console.log(element.name)
        });
    }
    else{
        let filtered=array.filter((i)=>i.typeList===typeSong);
        filtered.forEach(element => {
            console.log(element.name)
        });
    }
}

solve([
    '3',
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);