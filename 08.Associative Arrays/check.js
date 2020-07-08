var arr = [{
    id: 1,
    username: 'fred'
}, {
    id: 2,
    username: 'bill'
}, {
    id: 3,
    username: 'ted'
}];

function add(name) {
    var id = arr.length + 1;        
            if (arr.filter(item=> item.username == name).length == 0){
            arr.push({ id: id, username: name });
        }
}

add('teda');
console.log(arr);