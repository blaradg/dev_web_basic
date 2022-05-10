// Loops o Ciclos

var students = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function greetStudents(student)
{
    console.log(`Hola, ${student}`);
}

// FOR
for (var i = 0; i < students.length; i++)
{
    greetStudents(students[i]);
}

for (var student of students)
{
    greetStudents(student);
}

// WHILE
while (students.length > 0)
{
    var student = students.shift();
    greetStudents(student);
}
