let person = [
    {
        id : 1 ,
        name : "sahil" ,
        q : 1
    } ,
    {
        id : 2 ,
        name : "prince" ,
        q : 1
    }
]

console.log(person)

if(!localStorage.getItem("person")) {
    localStorage.setItem("person", JSON.stringify(person))
}

function increment(id) {
    let person = JSON.parse(localStorage.getItem("person"))
    person = person.map( (obj) => {
        if(obj.id === id) {
            return { ...obj, q : obj.q + 1 }
        }
        return obj;
    });
    localStorage.setItem("person", JSON.stringify(person))
    console.log(person)
}

function decrement(id) {
    let person = JSON.parse(localStorage.getItem("person"))
    person = person.map( (obj) => {
        if(obj.id === id) {
            return { ...obj, q : obj.q - 1 }
        }
        return obj;
    });
    localStorage.setItem("person", JSON.stringify(person))
    console.log(person)
}

