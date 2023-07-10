function redirectUser() {
    var idInput = document.getElementById("idInput").value;
    
    // Perform validation and redirect logic here
    // Example logic: If ID key is "123", redirect to user's page
    if (idInput === "ADMIN@SN1234") {
      window.location.href = "https://databaseofhid.vercel.app/hjhhdjhsjhddkjasjhhhdjhsjh/"; // Replace with the URL of the user's page
    } else {
      alert("Invalid ID key. Please try again."); // Show an error message
    }
  }
  
