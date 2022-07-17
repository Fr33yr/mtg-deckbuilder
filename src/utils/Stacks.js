function Stacks( qty, name){
    return ({
        id:id,
        info:{
            cantidad: qty,
            nombre: name
        } 
    })
}

const arr = [{id: "123iuda-kas-12", name: "chanchito feliz"},
 {id: "344pjda-hlad6", name: "pepeloco"}, {id: "23i4gi", name: "gatete"}]

function hasItem(arry, id){
    if(arry.find(item => item.id === `${id}`) === undefined){
        return "Not exists"
    }
    return arry.find(item => item.id === `${id}`)
}

hasItem(arr, "344pjda-hlad6")