class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() { }
}
class TextBox extends Control {
}
// Error: Property 'state' is missing in type 'Image'.
// class myImage  implements SelectableControl {
//     select() { }
// }

// SelectableControl包含了Control的所有成员，包括私有成员state。 因为state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。
//  因为只有Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。
// 在Control类内部，是允许通过SelectableControl的实例来访问私有成员state的。 实际上，SelectableControl就像Control一样，并拥有一个select方法。
//  Button和TextBox类是SelectableControl的子类（因为它们都继承自Control并有select方法），但Image和Location类并不是这样的。