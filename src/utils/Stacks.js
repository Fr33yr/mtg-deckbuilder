export function hasItem(arry, id) {
    return arry.find(item => item.id === `${id}`)
}

export function addAmount(arr, id) {
    const index = arr.findIndex(object => {
        return object.id === id;
    });
    if (index !== -1) {
        arr[index].amount = arr[index].amount + 1;
    }
}