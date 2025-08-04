let student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        { subject: "Math", score: 9 },
        { subject: "English", score: 7.5 },
        { subject: "Physics", score: 6 },
        { subject: "Literature", score: 8.5 }
    ]
}
let getStudentSummary = (student) => {
    let rank;
    const scores = student.listMonhoc.map(mon => mon.score);
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const avg = Number((totalScore / scores.length).toFixed(2));
    if (avg >= 8.5) {
        rank = "Học sinh giỏi";
    } else if (avg >= 7) {
        rank = "Học sinh khá";
    } else if (avg >= 5) {
        rank = "Học sinh trung bình";
    } else if (avg < 5) {
        rank = "Học sinh yếu"
    }
    const bestSubject = student.listMonhoc.reduce((best, current) =>
        current.score > best.score ? current : best
    );
    const weakestSubject = student.listMonhoc.reduce((weakest, current) =>
        current.score < weakest.score ? current : weakest
    );
    return {
        name: student.name,
        age: student.age,
        average: avg,
        rank: rank,
        bestSubject: bestSubject.subject,
        weakestSubject: weakestSubject.subject
    };
}
console.log(getStudentSummary(student));
