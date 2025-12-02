document.getElementById("gumbNext").addEventListener("click", () => {

    const gesloInputElement = document.getElementById("gesloInput") || document.querySelector('input[name="geslo"]');
    const geslo = gesloInputElement ? gesloInputElement.value : ""; 
    
    if (geslo != "Test123") {
        Swal.fire({
            confirmButtonColor: "#0ea0ee",
            icon: "error",
            title: "Slabo geslo",
            text: "Geslo ni pravilno!"
        });
        return;
    }
});

/*function validatePassword(pass) {
    const minLength = pass.length >= 8;
    const hasLower = /[a-z]/.test(pass);
    const hasUpper = /[A-Z]/.test(pass);
    const hasNumber = /[0-9]/.test(pass);

    return minLength && hasLower && hasUpper && hasNumber;
}
*/
