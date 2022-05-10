// Loops o Ciclos

// FOR
var students = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function greetStudents(student)
{
    console.log(`Hola, ${student}`);
}

for (var i = 0; i < students.length; i++)
{
    greetStudents(students[i]);
}

for (var student of students)
{
    greetStudents(student);
}

