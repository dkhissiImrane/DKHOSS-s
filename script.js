document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for buttons
    document.getElementById('question1').addEventListener('click', function() {
        showAnswer('correct', 'question1');
    });

    document.getElementById('question2').addEventListener('click', function() {
        showAnswer('wrong', 'question2');
    });

    // Function to show answer and image
    function showAnswer(answer, questionId) {
        let answerText = '';
        let imgSrc = '';

        // Check if answer is correct or wrong
        if (answer === 'correct') {
            answerText = 'Correct Answer!';
            imgSrc = 'https://example.com/correct-image.jpg';  // Replace with your actual image path
        } else {
            answerText = 'Wrong Answer, Try Again!';
            imgSrc = 'https://example.com/try-again-image.jpg';  // Replace with your actual image path
        }

        // Display the answer
        let answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        answerDiv.textContent = answerText;

        // Create an image element for the response
        let img = document.createElement('img');
        img.src = imgSrc;
        img.alt = 'Answer Image';

        // Append answer and image to the body
        document.querySelector('.container').appendChild(answerDiv);
        document.querySelector('.container').appendChild(img);

        // Disable the button after answering
        document.getElementById(questionId).disabled = true;
    }
});
