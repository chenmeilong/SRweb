
function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

//?可选参数
function buildName2(firstName: string, lastName?: string) { //可选参数必须跟在必须参数后面。
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result4 = buildName2("Bob");  // works correctly now
// let result5 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
let result36= buildName2("Bob", "Adams");  // ah, just right

//默认值
function buildName3(firstName: string, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result5 = buildName3("Bob");                  // works correctly now, returns "Bob Smith"
let result6 = buildName3("Bob", undefined);       // still works, also returns "Bob Smith"
// let result7 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
let result8 = buildName3("Bob", "Adams");         // ah, just right


//带默认值的参数不需要放在必须参数的后面。 如果带默认值的参数出现在必须参数前面，用户必须明确的传入undefined值来获得默认值。
function buildName4(firstName = "Will", lastName: string) {
    return firstName + " " + lastName;
}
// let result9  = buildName4("Bob");                  // error, too few parameters
// let result10 = buildName4("Bob", "Adams", "Sr.");  // error, too many parameters
let result11 = buildName4("Bob", "Adams");         // okay and returns "Bob Adams"
let result12 = buildName4(undefined, "Adams");     // okay and returns "Will Adams"


