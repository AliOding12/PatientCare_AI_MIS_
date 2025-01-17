document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
        document.getElementById("toggleBtn").addEventListener("click", function() {
            document.getElementById("sidebar").classList.toggle("hidden");});
            document.getElementById("appointmentsBtn").addEventListener("click", function() {
                window.location.href = "http://localhost:8080/api/appointment";
            });
            document.getElementById("medicalhistoryBtn").addEventListener("click", function() {
                window.location.href = "http://localhost:8080/api/medicalhistory";
            });    
    })
    .catch(error => console.error("Error loading sidebar:", error));
});
// Add sidebar JavaScript functionality
// Add sidebar JavaScript functionality
