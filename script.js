document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const messageText = document.getElementById('messageText');
    const responseMessage = document.getElementById('responseMessage');
    const monthsaryDate = document.getElementById('monthsaryDate');

    submitButton.addEventListener('click', function () {
        const userMessage = messageText.value.trim();
        const selectedDate = monthsaryDate.value;

        if (selectedDate) {
            // Handle the date response
            responseMessage.textContent = generateDateResponse(selectedDate);
        } else if (userMessage !== '') {
            // Handle the message response
            responseMessage.textContent = generateMessageResponse(userMessage);
        } else {
            // Handle the case where both fields are empty
            responseMessage.textContent = 'Please enter a message and/or select a date before submitting.';
        }
    });

    function generateMessageResponse(message) {
        // Convert the message to lowercase for case-insensitive comparison
        const lowerMessage = message.toLowerCase();

        // Provide a response based on the content of the message
        if (lowerMessage.includes('yes')) {
            return 'Buti naman kung ganon! You are my happiness as well, you make me the happiest person ever. Having you is a thousand times enough. Iloveyousomuch! ';
        } else if (lowerMessage.includes('no') || lowerMessage.includes('down')) {
            return 'ah ganon? bawal yan!';
        } else if (lowerMessage.includes('sobra')) {
            return 'buti naman kung ganon! 💖';
        } else {
            return 'ganyan ka pala talaga sa baby mo ah:(';
        }
    }

    function generateDateResponse(date) {
        // Define the specific date we want to respond to
        const specifiedDate = new Date('2024-08-08'); // August 8, 2024
        const selectedDate = new Date(date);

        // Set both dates to midnight to avoid time zone issues
        specifiedDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        // Check if the selected date matches the specified date
        if (selectedDate.getTime() === specifiedDate.getTime()) {
            return 'It’s August 8, 2024! This date is very special to us. 🎉';
        } else {
            return `The selected date is ${selectedDate.toLocaleDateString()}. Can’t wait to celebrate on that day! 🎈`;
        }
    }
});
