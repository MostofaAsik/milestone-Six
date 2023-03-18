const Asik = {
    name: "asik",
    exam: function () {
        return this.name + " is a boy";
    },
    improveExam: function () {
        this.exam()
        return `${this.name} has a improvemet exam of calculas`
    },
}
const badam = {
    name: "badam kaca",
    money: 8000,
}
const result = Asik.exam.call(badam)
console.log(result);