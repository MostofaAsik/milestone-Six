const person = {
    name: "asik",
    exam: function () {
        return this.name + " is a boy";
    },
    improveExam: function () {
        this.exam()
        return `${this.name} has a improvemet exam of calculas`
    },
}
const result = person.exam()
console.log(result);

const output = person.improveExam()
console.log(output)