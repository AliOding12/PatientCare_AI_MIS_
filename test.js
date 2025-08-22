// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Book Appointment</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//     <style>
//         body {
//             background-color: #f8f9fa;
//         }
//         .container {
//             max-width: 600px;
//             margin-top: 50px;
//             background: white;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .submit-btn {
//             background-color: #007bff;
//             color: white;
//             padding: 10px 15px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//         }
//         .submit-btn:hover {
//             background-color:rgb(25, 108, 197);
//         }
//     </style>
// </head>
// <body>

//     <div class="container">
//         <h2 class="text-center">Book an Appointment</h2>
//         <form id="appointmentForm">
//             <input type="hidden" id="doctorId">
//             <div class="mb-3">
//                 <label for="appointmentDate" class="form-label">Select Date</label>
//                 <input type="date" class="form-control" id="appointmentDate" required>
//             </div>
//             <div class="mb-3">
//                 <label for="appointmentTime" class="form-label">Select Time</label>
//                 <input type="time" class="form-control" id="appointmentTime" required>
//             </div>
//             <button type="submit" class="submit-btn">Confirm Appointment</button>
//         </form>
//         <p id="responseMessage" class="text-center mt-3"></p>
//     </div>

//     <script>
//         // ✅ Function to Get Query Parameters from URL
//         function getQueryParam(param) {
//             const urlParams = new URLSearchParams(window.location.search);
//             return urlParams.get(param);
//         }

//         document.addEventListener("DOMContentLoaded", function () {
//             const doctorId = getQueryParam("doctorId"); // Get doctorId from URL
//             if (doctorId) {
//                 document.getElementById("doctorId").value = doctorId; // Set hidden field
//             } else {
//                 alert("Doctor ID is missing. Redirecting...");
//                 window.location.href = "find_doctor.html"; // Redirect if no doctor ID
//             }
//         });

//         document.getElementById("appointmentForm").addEventListener("submit", async function(event) {
//             event.preventDefault();

//             const patientId = 1; // Replace with actual logged-in patient's ID
//             const doctorId = document.getElementById("doctorId").value;
//             const appointmentDate = document.getElementById("appointmentDate").value;
//             const appointmentTime = document.getElementById("appointmentTime").value;

//             if (!doctorId || !appointmentDate || !appointmentTime) {
//                 alert("Please fill all fields.");
//                 return;
//             }

//             const appointmentData = {
//                 patient_id: patientId,
//                 doctor_id: doctorId,
//                 appointment_date: `${appointmentDate} ${appointmentTime}`,
//                 status: "Scheduled"
//             };

//             try {
//                 const response = await fetch("http://localhost:8080/api/book-appointment", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(appointmentData)
//                 });

//                 const result = await response.json();
//                 document.getElementById("responseMessage").innerText = result.message;

//                 if (response.ok) {
//                     alert("Appointment booked successfully!");
//                     window.location.href = 'http://localhost:8080/api/patientdashboard'; // Redirect after booking
//                 } else {
//                     alert("Error: " + result.error);
//                 }
//             } catch (error) {
//                 console.error("Error booking appointment:", error);
//                 alert("Server error. Please try again.");
//             }
//         });
//     </script>

// </body>
// </html>




//old carddoc code is following the above one is the new carddoc code



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Book Appointment</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//     <style>
//         body {
//             background-color: #f8f9fa;
//         }
//         .container {
//             max-width: 600px;
//             margin-top: 50px;
//             background: white;
//             padding: 20px;
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .submit-btn {
//             background-color: #007bff;
//             color: white;
//             padding: 10px 15px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//         }
//         .submit-btn:hover {
//             background-color: #0056b3;
//         }
//     </style>
// </head>
// <body>

//     <div class="container">
//         <h2 class="text-center">Book an Appointment</h2>
//         <form id="appointmentForm">
//             <input type="hidden" id="doctorId" value="1"> <!-- Dynamically Set Doctor ID -->
//             <div class="mb-3">
//                 <label for="appointmentDate" class="form-label">Select Date</label>
//                 <input type="date" class="form-control" id="appointmentDate" required>
//             </div>
//             <div class="mb-3">
//                 <label for="appointmentTime" class="form-label">Select Time</label>
//                 <input type="time" class="form-control" id="appointmentTime" required>
//             </div>
//             <button type="submit" class="submit-btn">Confirm Appointment</button>
//         </form>
//         <p id="responseMessage" class="text-center mt-3"></p>
//     </div>

//     <script>
//         document.getElementById("appointmentForm").addEventListener("submit", async function(event) {
//             event.preventDefault();

//             const patientId = 1; // Replace with actual logged-in patient's ID
//             const doctorId = document.getElementById("doctorId").value;
//             const appointmentDate = document.getElementById("appointmentDate").value;
//             const appointmentTime = document.getElementById("appointmentTime").value;

//             if (!appointmentDate || !appointmentTime) {
//                 alert("Please fill all fields.");
//                 return;
//             }

//             const appointmentData = {
//                 patient_id: patientId,
//                 doctor_id: doctorId,
//                 appointment_date: `${appointmentDate} ${appointmentTime}`,
//                 status: "Scheduled"
//             };

//             try {
//                 const response = await fetch("http://localhost:8080/api/book-appointment", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(appointmentData)
//                 });

//                 const result = await response.json();
//                 document.getElementById("responseMessage").innerText = result.message;

//                 if (response.ok) {
//                     alert("Appointment booked successfully!");
//                     window.location.href = 'http://localhost:8080/api/patientdashboard'; // Redirect after booking
//                 } else {
//                     alert("Error: " + result.error);
//                 }
//             } catch (error) {
//                 console.error("Error booking appointment:", error);
//                 alert("Server error. Please try again.");
//             }
//         });
//     </script>

// </body>
// </html>

