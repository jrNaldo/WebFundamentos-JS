function teste(){
    console.log("Function Expression")
    return `fn Expression`
}


const testeArrow = (str, n ) => `Arrow Function, ${str}, ${n}`


const t1 = testeArrow("callback em Arrow function", "Num: 10")
console.log(t1)

const testeArrow2 = () => {
    return {
        foo: "bar" 
    }
}

const t2 = testeArrow2()
console.log(t2)
console.log(t2['foo'])
console.log(t2.foo)