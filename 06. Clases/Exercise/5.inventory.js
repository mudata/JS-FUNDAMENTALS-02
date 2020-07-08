function solve(arr) {
    let heros=[];

while (arr.length>0) {
    let line=arr.shift().split(" / ")
    let obj={
        name:line[0],
        level:Number(line[1]),
        items:line[2]
        .split(", ")
        .sort((a,b)=>a.localeCompare(b))
        .join(", ")
    }
    heros.push(obj)
}
//console.log(heros)

heros.sort(function(a, b) {
    return a.level-b.level;
});

for (const key of heros) {
    console.log(`Hero: ${key.name}`)
    console.log(`level => ${key.level}`);
    console.log(`items => ${key.items}`)
}
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]);