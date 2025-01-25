// Retrieve reload count from localStorage, or initialize it
let reloadCount = localStorage.getItem('reloadCount') ? parseInt(localStorage.getItem('reloadCount')) : 0;

// Increment reload count and store it back in localStorage
reloadCount++;
localStorage.setItem('reloadCount', reloadCount);

// Update the reload count display
document.getElementById('reloadCount').textContent = reloadCount;
