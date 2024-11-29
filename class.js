class Human{
    constructor(name,age){
        this.name = name;
        this.age=age;
        this.sayHello2 = () => {
            console.log(`Hello, I'm ${this.name}`);
        };
    }

    sayHello(){
        console.log(`Hello, I'm ${this.name}`);
    }

    setName(newName){
        this.name=newName;
    }

}

const person1 = new Human ("Jhon",25);
const person2 = new Human ("Oguz",25);


console.log(person1.sayHello === person2.sayHello);
//console.log(person1 === person2);
console.log(person1.sayHello2 === person2.sayHello2);
