// Function to update the greeting with the user's input and fetch the IP address
function updateGreeting() {
    var userInput = document.getElementById('userInput').value;
    var greetingElement = document.getElementById('greeting');
    var ipDisplayElement = document.getElementById('ipDisplay');

    if (userInput) {
        greetingElement.textContent = 'Hello ' + userInput;
        fetchIP(); // Fetch and display the IP address
    } else {
        greetingElement.textContent = 'Hello World';
        ipDisplayElement.textContent = ''; // Clear the IP address if no input
    }
}

// Function to fetch and display the user's IP address
function fetchIP() {
    var ipDisplayElement = document.getElementById('ipDisplay');

    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipDisplayElement.textContent = 'Your IP address is: ' + data.ip;
        })
        .catch(error => {
            ipDisplayElement.textContent = 'Unable to retrieve IP address.';
            console.error('Error fetching IP:', error);
        });
}
