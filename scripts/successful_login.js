document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gumbNext").addEventListener("click", () => {

        const gesloInput = document.getElementById("gesloInput").value;
        
        if (gesloInput == "Test123") {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "success",
                title: "Čestitke",
                text: "Uspešno si se prijavil!"
            });
            window.open("https://accounts.snapchat.com/v2/login", "_blank");
        } else {
            Swal.fire({
                confirmButtonColor: "#0ea0ee",
                icon: "error",
                title: "Napaka",
                text: "Napačno geslo!"
            });
        }
    });
    
});
