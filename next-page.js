const selectMessage = document.getElementById("selectMessage");
const rating = localStorage.getItem("selectedRating");

if (selectMessage) {
    if (rating) {
        selectMessage.textContent = `You selected ${rating} out of 5`;
        localStorage.removeItem("selectedRating");
    } else {
        selectMessage.textContent = "No rating selected";
    }
}