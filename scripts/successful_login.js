document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gumbNext").addEventListener("click", () => {
        Swal.fire({
            icon: "success",
            title: "Čestitke",
            text: "Uspešno si se prijavil!"
        });
    });
    
});
