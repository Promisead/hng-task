// Function to update the UTC time every second
function updateUTCTime() {
  const utcTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  setInterval(() => {
    const currentUTCTimeMillis = new Date().getTime();
    utcTimeElement.textContent = currentUTCTimeMillis;
  }, 1000); // Update every second
}

// Call the function to start updating the UTC time
updateUTCTime();
