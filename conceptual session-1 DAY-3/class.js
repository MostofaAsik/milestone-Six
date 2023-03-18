// class Student {
//     name = 'Asik'
//     roll = 12
// }
// const student1 = new Student();
// console.log(student1.roll);

class Student {
    name;
    roll;
    constructor(nam, rol) {
        this.name = nam;
        this.roll = rol
    }
    showDetails() {
        console.log(`my name is ${this.name} my roll is ${this.roll}`);
    }
}
const student1 = new Student('asik', 12)
student1.showDetails()