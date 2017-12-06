import $ from 'jquery';

class Person {
    constructor(name){
        this.name = name;
    }
    
    sayHello(){
        // const {name} = this;
        //return 'Hello, my name is '+ this.name;
        //ES6
        return `Hello, my name is ${this.name}`;
    }
    
    sayGoodbye(){
        return `It's time for me to go.`;
    }
}

class SuperPerson extends Person {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    
    superSayHi(){
        return `HI MY NAME IS ${this.name} and I'm ${this.age} years old.`;
    }
    
    sayHello(){
//        const container = $('<h1>', {
//            text: super.sayHello()
//        });
//        
//        $('#root').append(container);
//        return 'It worked!';
        //core javascript
        const container = document.createElement('h1');
        container.innerText = super.sayHello();
        
        document.getElementById('root').appendChild(container);
        return;
    }
}

export default SuperPerson;