const correctAnswers = {
    q1: 'A',
    q2: 'D',
    q3: 'D',
    q4: 'C',
    q5: 'D',
    q6: 'B',
    q7: 'C',
    q8: 'C',
    q9: 'A',
    q10: 'B'
};

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const formData = new FormData(this);
    const resultDiv = document.getElementById('result');
    
    formData.forEach((value, key) => {
        if (correctAnswers[key] === value) {
            score += 4;
        } else {
            score -= 1;
        }
    });
    alert('Your score is: ' + score);
    resultDiv.innerHTML = `<h2>Your Score: ${score}</h2>`;
    
});