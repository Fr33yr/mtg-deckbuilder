export function hasItem(arry, id) {
    return arry.find(item => item.id === `${id}`)
}

export function removeItem(arr, id){
    const index = arr.findIndex(object => {
        return object.id === id;
    })
    arr.splice(index,1)
}

export function addAmount(arr, id) {
    const index = arr.findIndex(object => {
        return object.id === id;
    });
    if (index !== -1) {
        arr[index].amount += 1;
    }
}

export function decreaseAmount(arr, id) {
    const index = arr.findIndex(object => {
        return object.id === id;
    });
    if (index !== -1) {
        arr[index].amount -= 1;
    }
}