export function hasItem(arry, id) {
    return arry.find(item => item.id === `${id}`)
}

export function removeItem(arr, id) {
    const index = arr.findIndex(object => {
        return object.id === id;
    });
    if (index !== -1) {
        arr[index].amount -= 1;
        if(arr[index].amount === 0){
            arr.splice(index, 1)
        }
    }
}

export function addAmount(arr, id) {
    const index = arr.findIndex(object => {
        return object.id === id;
    });
    if (index !== -1) {
        arr[index].amount += 1;
    }
}

export function getColors(arr) {
    const flattend = arr.map(element => element.colors).flatMap(x => x)
    let filtered = flattend.filter((element, index) => {
        return flattend.indexOf(element) === index
    }) 
    return filtered
}
