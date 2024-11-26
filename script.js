// JavaScript to handle question interactions
document.querySelectorAll('.question-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Find the associated answer container
        const answerContainer = button.nextElementSibling;
        
        // Toggle visibility
        if (answerContainer.style.display === 'none' || !answerContainer.style.display) {
            answerContainer.style.display = 'block';
        } else {
            answerContainer.style.display = 'none';
        }
    });
});
