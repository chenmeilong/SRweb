
//当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。 const

//常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。 
//常数枚举成员在使用的地方被内联进来。 这是因为常数枚举不可能有计算成员。
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

// var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];