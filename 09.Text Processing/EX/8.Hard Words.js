function solve(input) {
    let index;
    let arr=input[0].split(" ");
    for (let i = 0; i < input[1].length; i++) {
        const element = input[1][i];
        for (let j = 0; j < arr.length; j++) {
            const element1 = arr[j];
            if(element.length===element1.length&&element1.startsWith("_"))arr[j].replace("_".repeat(element.length),element);
            
        }
    }
console.log(arr)
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);