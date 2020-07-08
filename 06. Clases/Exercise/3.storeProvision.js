function solve(arr1,arr2) {
    let products=[];

    
for (let i = 0; i < arr1.length; i+=2) {
    const element = arr1[i];
    let el2=arr1[i+1];
    let product={};
    product.name=element;
    product.quantity=el2;
    products.push(product);
}
for (let i = 0; i < arr2.length; i+=2) {
    let bool=true;
    const element = arr2[i];
    const el2=arr2[i+1];

        for (const key in products) {
            if(element===products[key].name){
                products[key].quantity=Number(products[key].quantity)+Number(el2);
                bool=false;
                break;
            }    
    }
    if(bool){
            let product={};
            product.name=element;
            product.quantity=el2;
            products.push(product);
    }
    
}
for (const key in products) {
    console.log(`${products[key].name} -> ${products[key].quantity}`);
}
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
