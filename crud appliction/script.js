document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('markForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const numSubjects = parseInt(document.getElementById('numSubjects').value);
        let totalMarks = 0;

        // Clear previous subject marks
        const subjectMarksDiv = document.getElementById('subjectMarks');
        subjectMarksDiv.innerHTML = '';

        // Dynamically create inputs for subject marks
        for (let i = 1; i <= numSubjects; i++) {
            const label = document.createElement('label');
            label.textContent = `Subject ${i} Mark: `;
            const input = document.createElement('input');
            input.type = 'number';
            input.required = true;
            input.classList.add('subjectMark');
            subjectMarksDiv.appendChild(label);
            subjectMarksDiv.appendChild(input);
        }

        // Calculate total marks and average
        const subjectMarkInputs = document.querySelectorAll('.subjectMark');
        subjectMarkInputs.forEach(input => {
            totalMarks += parseInt(input.value);
        });
        const average = totalMarks / numSubjects;

        // Display result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <p>Total Marks: ${totalMarks}</p>
            <p>Average Mark: ${average}</p>
        `;
    });
});
