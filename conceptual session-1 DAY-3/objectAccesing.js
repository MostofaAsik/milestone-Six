const Person = {
    name: 'abul',
    age: 23,
    contact: {
        phone: '09432723',
        email: "abul@gmail.com"
    },
    education: {
        schoolName: "andorkilla high school",
        subjects: [
            { name: 'bangla', mark: 45 },
            { name: 'english', mark: 64 },
            { name: 'math', mark: 74 }
        ]
    }
}

// object accesing with dot notation >>>process-1
const SubjectsMarks = Person.education.subjects[0].mark
console.log(SubjectsMarks)

//object accesing  >>>process-2
// third bracket with inverted coma >> ['object property name']
const age = Person['age']
console.log(age)

