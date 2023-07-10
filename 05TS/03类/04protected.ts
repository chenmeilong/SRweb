//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问


class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
    //构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
}

// Employee 能够继承 Person
class myEmployee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new myEmployee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误 无权限访问
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.