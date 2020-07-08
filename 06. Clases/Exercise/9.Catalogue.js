function solve(input) {
    
    let products=[];
    for (let i = 0; i < input.length; i++) {
        const element = input[i].split(" : ");
        let catalogue ={};
        catalogue.productName=element[0];
        catalogue.productPrice=element[1];
        products.push(catalogue);
    }
   
    let newaw=Object.assign({}, ...products);
    console.log(newaw)
    console.log(products)
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]);
//   A
//   Anti-Bug Spray: 15
//   Apple: 1.25
//   Appricot: 20.4
// B
//   Boiler: 300
// D
//   Deodorant: 10
// F
//   Fridge: 1500
// T
//   T-Shirt: 10
//   TV: 1499