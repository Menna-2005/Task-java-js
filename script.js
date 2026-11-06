// ======================================
// 1. Student Class
// ======================================

class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;

    }

    // Calculate Average Using Reduce
    calculateAverage() {

        let total = this.grades.reduce(
            (sum, grade) => sum + grade, 0
        );

        return total / this.grades.length;

    }

    // Calculate Student Grade
    getGrade(average = this.calculateAverage()) {

        if (average >= 90) {
            return "A";
        }

        else if (average >= 80) {
            return "B";
        }

        else if (average >= 70) {
            return "C";
        }

        else if (average >= 60) {
            return "D";
        }

        else if (average >= 50) {
            return "E";
        }

        else {
            return "F";
        }

    }

    // Calculate Final Result
    getFinalResult() {

        let average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {

            return "ناجح";

        }

        else {

            return "يحتاج مراجعة";

        }

    }

}


// ======================================
// 2. Create Students Objects
// ======================================

const studentsList = [

    new Student(
        101,
        "Ahmed Mohamed",
        [95, 90, 92],
        95
    ),

    new Student(
        102,
        "Menna Ali",
        [45, 40, 50],
        80
    ),

    new Student(
        103,
        "Omar Khaled",
        [48, 45, 49],
        90
    ),

    new Student(
        104,
        "Sara Mahmoud",
        [70, 75, 80],
        65
    )

];


// ======================================
// 3. Display All Students Reports
// ======================================

function runSystem() {

    console.clear();

    console.log("==================================");

    console.log(" STUDENT MANAGEMENT SYSTEM ");

    console.log("==================================");


    const studentsReport = studentsList.map(student => {

        return {

            ID: student.id,

            Name: student.name,

            Average: student.calculateAverage().toFixed(2),

            Grade: student.getGrade(),

            Attendance: student.attendance + "%",

            Result: student.getFinalResult()

        };

    });


    console.log("1. ALL STUDENTS REPORT");

    console.table(studentsReport);


    // ======================================
    // 4. Mercy Committee - Filter
    // ======================================

    const strugglingStudents = studentsList.filter(student => {

        let average = student.calculateAverage();

        return average >= 40 && average <= 49;

    });


    // ======================================
    // 5. Add 5 Mercy Marks - Map
    // ======================================

    const mercyStudents = strugglingStudents.map(student => {

        let oldAverage = student.calculateAverage();

        let newAverage = Math.min(oldAverage + 5, 100);

        return {

            ID: student.id,

            Name: student.name,

            OldAverage: Number(oldAverage.toFixed(2)),

            MercyMarks: 5,

            NewAverage: Number(newAverage.toFixed(2)),

            NewGrade: student.getGrade(newAverage)

        };

    });


    console.log("==================================");

    console.log("2. MERCY COMMITTEE REPORT");

    console.log("==================================");


    console.table(mercyStudents);


    // ======================================
    // 6. Calculate Total New Averages - Reduce
    // ======================================

    const totalNewAverages = mercyStudents.reduce(

        (total, student) => total + student.NewAverage,

        0

    );


    // ======================================
    // 7. Calculate Mercy Average
    // ======================================

    const mercyAverage = mercyStudents.length > 0

        ? totalNewAverages / mercyStudents.length

        : 0;


    console.log("==================================");

    console.log("3. MERCY COMMITTEE ANALYSIS");

    console.log("==================================");


    console.log(
        "Number of Struggling Students:",
        mercyStudents.length
    );


    console.log(
        "Total New Averages:",
        totalNewAverages.toFixed(2)
    );


    console.log(
        "Average After Mercy:",
        mercyAverage.toFixed(2)
    );


    console.log("==================================");

    console.log("SYSTEM ANALYSIS COMPLETED");

    console.log("==================================");

}