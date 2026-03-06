# student-registration-system

A simple student registration system implemented in JavaScript.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Usage

```javascript
const StudentRegistration = require('./student_registration');

const registration = new StudentRegistration();
registration.registerStudent('John Doe', 'john@example.com');
console.log(registration.getStudents());
```