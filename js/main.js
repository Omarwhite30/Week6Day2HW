//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


{
for(let i = 0; i < Object.keys(person3).length; i++){
    if(Array(Object.values(person3)[i])){
        console.log(Object.values(person3)[i])
    }
}
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Human{
    constructor(name, age,){
        this.name = name;
        this.age = age;
    }


// Use an arrow to create the printInfo method

printInfo() {
    return `Name: ${this.name}\n Age: ${this.age}`

}
}

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

let Omar = new Human('Omar', '30',);

function increaseAge(base, increase){
    const newAge = base + increase;
    console.log(`New Age: ${newAge}`)
    return newAge
}

console.log(Omar.printInfo())

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const looneyTunes = (num) => {
    return new Promise( (resolve,reject) => {
        if(num >= 10 == 0){
            resolve('Big word')
        } else {
            reject('Small Number')
        }
    })
}
looneyTunes(10)

.then( ( results) => {
    console.log(`looney Tunes ${results}`)
})
