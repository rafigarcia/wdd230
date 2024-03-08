const visitDisplay = document.getElementById("message");
const today = new Date();
const todayTimestamp = today.getTime(); // Get the current timestamp

let lastVisitTimestamp = parseInt(localStorage.getItem("lastVisit"), 10) || 0; // Parse the stored timestamp or use 0 if not available
let lastVisit = new Date(lastVisitTimestamp);

// Check if it's a new day or the first visit
if (lastVisitTimestamp === 0 || !isSameDay(lastVisit, today)) {
    visitDisplay.textContent = "Welcome! Let us know if you have any questions";
} else {
    visitDisplay.textContent = "Welcome back! You were last here on " + formatDate(lastVisit);
}

// Update last visit timestamp in local storage
localStorage.setItem("lastVisit", todayTimestamp);

// Function to check if two dates represent the same day
function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

// Function to format date as "day month"
function formatDate(date) {
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("en-US", options);
}

