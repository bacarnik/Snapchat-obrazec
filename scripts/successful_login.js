document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gumbNext").addEventListener("click", () => {
        Swal.fire({
            confirmButtonColor: "#0ea0ee",
            icon: "success",
            title: "Čestitke",
            text: "Uspešno si se prijavil!"
        });
    });
    
});
