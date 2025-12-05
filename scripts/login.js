document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("gumbNext");

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const input = document.getElementById("upoMail").value.trim();

        if (input === "test123" || input === "test123@gmail.com") {
            localStorage.setItem("savedUsername", input);
            window.location.href = "loginPasswd.html";
        }else{
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Uporabniško ime ni pravilno!",
            });
        }

        //const usernamePattern = /^[A-Za-z0-9]+$/;
        //const emailPattern = /^[A-Za-z0-9]+([._]?[A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/; 


        /*if (input === "") {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Polje z uporabniškim imenom/mailom je prazno!",
            });
        } else if (input.length < 5) {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Vneseno uporabniško ime ali mail je prekratko!",
            });
        } else if (!(usernamePattern.test(input) || emailPattern.test(input))) {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "warning",
                title: "Napaka",
                text: "Uporabniško ime ali mail vsebuje nedovoljene znake!",
            });
        } else {
            localStorage.setItem("savedUsername", input);
            window.location.href = "loginPasswd.html";
        }
        */
    });
});