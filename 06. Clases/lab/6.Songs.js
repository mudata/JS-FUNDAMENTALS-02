function solve(arr) {
    let songs=[];
    let numberSongs=arr.shift();
    let typeSong=arr.pop();
class Song{
    constructor(typeList,name,time){
        this.typeList=typeList;
        this.name=name;
        this.time=time;

    }
}
for (let i = 0; i < numberSongs; i++) {
    let [typeList,name,time]=arr[i].split('_');
    
    let song=new Song(typeList,name,time);
    songs.push(song);
    
    }
    console.log(songs)
    if(typeSong==="all"){
        songs.forEach((i)=>console.log(i.name));
        
    }else{
        let filtered=songs.filter((i)=>i.typeList===typeSong);
        filtered.forEach((i)=>console.log(i.name));
    
}

}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);