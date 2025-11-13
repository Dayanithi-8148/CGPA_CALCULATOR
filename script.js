function calculateCgpa() {
    let crd = [];
    let grades = [];

    const rows = document.querySelectorAll('.select-container select');
    rows.forEach(row => {
        crd.push(Number(row.id));
        grades.push(row.value);
    });

    let j = 0;
    let totalGradePoints = 0;
    for (let i of grades) {
        if (i === "o") {
            temp = 10 * crd[j];
        } else if (i === "a+") {
            temp = 9 * crd[j];
        } else if (i === "a") {
            temp = 8 * crd[j];
        } else if (i === "b+") {
            temp = 7 * crd[j];
        } else if (i === "b") {
            temp = 6 * crd[j];
        } else if (i === "c") {
            temp = 5 * crd[j];
        } else {
            temp = 0 * crd[j];
        }
        j += 1;
        totalGradePoints += temp;
    }
    let credits=0;
    let index=0;
    for(let i of grades){
        if (i != 'ra'){
            credits+=crd[index];
        }
        index+=1;
    }

    let cgpa = totalGradePoints / credits;
    console.log(totalGradePoints);
    console.log(credits);
    document.getElementById("resultcgpa").textContent = cgpa.toFixed(3);		
}


