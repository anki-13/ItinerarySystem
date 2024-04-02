// Initialize idle time counter
let idleTimeSeconds = 0;
let idleInterval;



// Function to update idle time display
function updateIdleTime() {
    document.getElementById('idle-time').innerText = `Idle Time: ${idleTimeSeconds} seconds`;
}

// Function to start idle time tracking
function startIdleTimeTracking() {
    idleInterval = setInterval(function() {
      idleTimeSeconds++;
      updateIdleTime();
      
      

      if (idleTimeSeconds > 15) {
        showResponse("Do you need any help. Please speak into the mic");
        startRecognition();

        idleTimeSeconds = 0;
        console.log("Mic on");
      }
    }, 1000); // Update every second
  }

// Event listener to reset idle time on user activity
window.addEventListener('mousemove', function() {
    idleTimeSeconds = 0;
});
window.addEventListener('keypress', function() {
    idleTimeSeconds = 0;
});
window.addEventListener('mousedown', function() {
    idleTimeSeconds = 0;
});

// Start tracking idle time when page loads
window.onload = function() {
    startIdleTimeTracking();
};
