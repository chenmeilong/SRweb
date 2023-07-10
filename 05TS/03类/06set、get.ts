let passcode = "secret passcode";

class Employe {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employe = new Employe();
employe.fullName = "Bob Smith";
if (employe.fullName) {
    console.log(employe.fullName);
}