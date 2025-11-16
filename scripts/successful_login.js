document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gumbNext").addEventListener("click", () => {
        Swal.fire({
            icon: "success",
            title: "Čestite",
            text: "Uspešno si se prijavil!"
        });
    });
    
});
