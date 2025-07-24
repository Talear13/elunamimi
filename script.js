document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password-input");
    const riddleText = document.getElementById("riddle-text");

    // Listen for the user input
    passwordInput.addEventListener("input", (e) => {
        const inputValue = e.target.value;

        // Check if the input matches the password (for demonstration purposes)
        if (inputValue === "love") { // Change 'keyboard' to your desired password
            riddleText.innerHTML = "Correct! You've unlocked the main room.";
            passwordInput.disabled = true; // Disable further input after correct password
        }
    });
});
