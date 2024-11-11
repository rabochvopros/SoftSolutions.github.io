document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяет стандартное поведение отправки формы

    const submitButton = document.getElementById('submitButton');
    
    // Изменяем текст кнопки и цвет
    submitButton.textContent = 'Заявка отправлена!';
    submitButton.classList.add('success');
});
