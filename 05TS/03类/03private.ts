class myAnimal {
    private name: string;   //当成员被标记成private时，它就不能在声明它的类的外部访问
    constructor(theName: string) { this.name = theName; }
}
class Rhino extends myAnimal {
    constructor() { super("Rhino"); }
}
class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}
let animal = new myAnimal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
animal = rhino;  //Animal和Rhino共享了来自Animal里的私有成员定义private name: string，因此它们是兼容的。
// animal = employee; // 错误: Animal 与 Employee 不兼容.