<script>
        function clicked() {
            console.log("Button clicked!");

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();

            // Regular expressions for validation
            var namePattern = /^[A-Za-z\s]+$/;
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Validation checks
            if (name === "" || email === "") {
                alert("All fields are required");
                return false; // Prevent form submission
            } else if (!name.match(namePattern) || name.length < 5) {
                alert("Invalid Name");
                return false; // Prevent form submission
            } else if (!email.match(emailPattern)) {
                alert("Invalid Email");
                return false; // Prevent form submission
            } else {
               confirm("Thank you for contacting us.")
            }
        }
    </script>