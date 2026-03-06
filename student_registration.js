// student_registration.js

class StudentRegistration {
    constructor() {
        this.students = [];
    }

    registerStudent(name, email) {
        const student = { name, email };
        this.students.push(student);
        return student;
    }

    getStudents() {
        return this.students;
    }
}

module.exports = StudentRegistration;