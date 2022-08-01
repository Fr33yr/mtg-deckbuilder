export function getAmount(arr, id) {
    const index = arr.findIndex((obj) => {
        return obj.id === id
    })
    if (index !== -1) {
        return arr[index].amount
    } else {
        return 0
    }
}