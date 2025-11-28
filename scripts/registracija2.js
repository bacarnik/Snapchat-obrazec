document.addEventListener("DOMContentLoaded", () => {

    const emailInput = document.getElementById("emailInput");
    const mailButtons = document.querySelectorAll(".mailGumbi");
    const gumb = document.getElementById("gumbContinue");

    mailButtons.forEach(button => {
        button.addEventListener("click", () => {

            const currentValue = emailInput.value.trim();

            if (currentValue.length === 0) {
                Swal.fire({
                    confirmButtonColor: "#0ea0ee",
                    icon: "warning",
                    title: "Napaka",
                    text: "Najprej vnesi ime ali uporabniško ime, preden dodaš domeno."
                });
                return;
            }

            const validPattern = /^[A-Za-z0-9.@]*$/;
            if (!validPattern.test(currentValue)) {
                Swal.fire({
                    confirmButtonColor: "#0ea0ee",
                    icon: "warning",
                    title: "Napaka",
                    text: "Email lahko vsebuje samo črke, številke, piko in @."
                });
                return;
            }

            let textToAppend = button.textContent;


            emailInput.value = currentValue + textToAppend;
        });
    });


    gumb.addEventListener("click", () => {

        const value = emailInput.value.trim();
        const validPattern = /^[A-Za-z0-9.@]+$/;

        if (value.length === 0) {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Vnesi email naslov."
            });
            return;
        }

        if (!validPattern.test(value)) {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Email lahko vsebuje samo črke, številke, piko in @."
            });
            return;
        }

        const atCount = (value.match(/@/g) || []).length;
        if (atCount > 1) {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Email lahko vsebuje samo en znak @."
            });
            return;
        }

        localStorage.setItem("savedEmail", value);

        window.location.href = "registracija3.html";
    });

});
