document.addEventListener("DOMContentLoaded", () => {

    const savedEmail = localStorage.getItem("savedEmail");
    const textSpan = document.getElementById("besediloSpan");

    if (savedEmail) {
        textSpan.textContent = "We’ve sent a confirmation code to " + savedEmail;
    }

    const inputs = document.querySelectorAll(".stevilka");

    inputs.forEach((input, index) => {

        input.setAttribute("type", "text");

        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^\d]/g, ""); 

            if (input.value.length > 1) {
                input.value = input.value.slice(0, 1); 
            }

            if (input.value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !input.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    const gumb = document.getElementById("gumbContinue");
    if (gumb) {
        gumb.addEventListener("click", (e) => {
            e.preventDefault(); 

            const vsiPolni = Array.from(inputs).every(input => input.value.trim() !== "");

            if (!vsiPolni) {
                Swal.fire({
                    icon: "warning",
                    title: "Pozor",
                    text: "Prosim izpolni vse številke!"
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Čestitke",
                    text: "Uspešno si se registriral!"
                });
            }
        });
    }

});
