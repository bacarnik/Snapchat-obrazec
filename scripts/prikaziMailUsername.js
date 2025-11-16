document.addEventListener("DOMContentLoaded", () => {
    const mailSpan = document.getElementById("mail");

    const savedUsername = localStorage.getItem("savedUsername"); 
    const savedEmail = localStorage.getItem("savedEmail");

    if (savedUsername) {
        mailSpan.textContent = savedUsername;
    } else if (savedEmail) {
        mailSpan.textContent = savedEmail;
    } else {
        mailSpan.textContent = "Uporabnik"; 
    }

    document.getElementById("notYou").addEventListener("click", () => {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("username");
        document.getElementById("mail").textContent = "Uporabnik";
    });
    
});
