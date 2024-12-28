// Data structure to store bookings
const bookings = { 1: [], 2: [], 3: [] };

// Handle form submission
document.getElementById("booking-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form refresh
    const room = document.getElementById("room").value;
    const date = document.getElementById("date").value;

    // Check if the date is already booked
    if (bookings[room].includes(date)) {
        alert(`Room ${room} is already booked on ${date}.`);
    } else {
        // Add booking
        bookings[room].push(date);
        alert(`Room ${room} successfully booked for ${date}.`);
        updateBookingsTable();
    }
});

// Function to update the bookings table
function updateBookingsTable() {
    const tableBody = document.getElementById("bookings-table").querySelector("tbody");
    tableBody.innerHTML = ""; // Clear existing entries

    Object.keys(bookings).forEach((room) => {
        const dates = bookings[room];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Room ${room}</td>
            <td>${dates.length > 0 ? dates.join(", ") : "No bookings"}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize the table
updateBookingsTable();
