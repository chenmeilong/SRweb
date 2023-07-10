//js中子类的静态方法能够通过super来调用父类的静态方法
class Person {
    constructor(){
        this.age= 18
    }
    getAge(){
        return age
    }

    static getName() {
        return 'lear'
    }
    static name = 'jack'
}
class Student extends Person {
    static getName2() {
        return super.getName() + ',hi'
    }
}
console.log(Student.getName2());


let person = new Person()
console.log(person.getAge());