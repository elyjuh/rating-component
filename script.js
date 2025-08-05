const rateButton = document.querySelectorAll(".button");
const submitButton = document.getElementById("submit");
let selectedRating = null;


rateButton.forEach(button => {
    button.addEventListener("click", (event) => {
        rateButton.forEach(btn => btn.classList.remove("active"));
        selectedRating = event.target.value;
        event.target.classList.add("active");
    })
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    if (selectedRating) {
        localStorage.setItem("selectedRating", selectedRating);
        window.location.href = "thankyou.html";
    } else {
        alert("Please select a rating before submitting.");
    }
});


