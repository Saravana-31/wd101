document.getElementById("dob").addEventListener("change", function () {
    const dob = new Date(this.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    if (age < 18 || age > 55) {
        alert("Age must be between 18 and 55.");
        this.value = '';  // Reset the input if the age is invalid
    }
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTerms = document.getElementById("terms").checked;

    // Save data to localStorage
    const formData = { name, email, password, dob, acceptedTerms };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Load data into the table
    loadData();
});

function loadData() {
    const formData = JSON.parse(localStorage.getItem("formData"));
    if (formData) {
        const table = document.getElementById("dataTable").querySelector("tbody");
        table.innerHTML = `<tr>
            <td>${formData.name}</td>
            <td>${formData.email}</td>
            <td>${formData.password}</td>
            <td>${formData.dob}</td>
            <td>${formData.acceptedTerms ? "Yes" : "No"}</td>
        </tr>`;
    }
}

// Load data when the page loads
window.onload = loadData;

