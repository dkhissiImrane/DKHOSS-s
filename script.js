function checkAnswer(selectedAnswer, correctAnswer) {
    let result = document.getElementById('result');
    if (selectedAnswer === correctAnswer) {
        result.innerHTML = "<p style='color: green;'>إجابة صحيحة!</p>";
    } else {
        result.innerHTML = "<p style='color: red;'>إجابة خاطئة!</p>";
    }
}
