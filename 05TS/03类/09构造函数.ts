class Greeters {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeters: Greeters;
greeters = new Greeters("world");
console.log(greeters.greet());