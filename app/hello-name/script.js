function updateGreeting() {
    var userInput = document.getElementById('userInput').value;
    var greetingElement = document.getElementById('greeting');

    if (userInput) {
        greetingElement.textContent = 'Hello ' + userInput;
    } else {
        greetingElement.textContent = 'Hello World';
    }
}
