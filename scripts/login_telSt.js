document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("gumbNext");

    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const tel = document.getElementById("telSt").value.trim();

        const regex = /^[0-9 ]+$/;

        if (tel === "" || !regex.test(tel)) {
            Swal.fire({
                icon: "error",
                title: "Napaka",
                text: "Vpiši samo številke in presledke.",
            });
            return;
        }

        window.location.href = "loginPasswd.html";
    });
});