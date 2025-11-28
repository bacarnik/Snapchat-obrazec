document.addEventListener("DOMContentLoaded", () => {
    const forma = document.getElementById("glavnaForma");
    const gumbContinue = document.getElementById("gumbContinue");

    const googleLogin = document.getElementById("googleLogin");
    googleLogin.addEventListener("click", () => {
      Swal.fire({
        icon: "info",
        title: "Info",
        text: "To še ne deluje"
      });
    });

    gumbContinue.addEventListener("click", () => {
      const firstName = forma.querySelector('input[name="firstName"]').value.trim();
      const lastName = forma.querySelector('input[name="lastName"]').value.trim(); 
      const usernameInput = forma.querySelector('input[name="username"]').value.trim();
      const passwordInput = forma.querySelector('input[name="geslo"]').value.trim();
      const birthday = forma.querySelector('input[name="datum"]').value.trim();

      const usernamePattern = /^[A-Za-z0-9]+$/; 

      if (!firstName) {
        Swal.fire({ 
          confirmButtonColor: "#0ea0ee",
          icon: "warning",
          title: "Napaka",
          text: "Vnesi ime!"
         });
        return;
      }
      if (!usernameInput) {
        Swal.fire({ confirmButtonColor: "#0ea0ee", icon: "warning", title: "Napaka", text: "Vnesi uporabniško ime!" });
        return;
      }
      if (!passwordInput) {
        Swal.fire({ confirmButtonColor: "#0ea0ee", icon: "warning", title: "Napaka", text: "Vnesi geslo!" });
        return;
      }
      
      if (!birthday) {
        Swal.fire({ confirmButtonColor: "#0ea0ee", icon: "warning", title: "Napaka", text: "Vnesi datum rojstva!" });
        return;
      }

      if (usernameInput.length < 5) {
        Swal.fire({ confirmButtonColor: "#0ea0ee", icon: "warning", title: "Napaka", text: "Uporabniško ime mora biti dolgo vsaj 5 znakov!" });
        return;
      }
      if (!usernamePattern.test(usernameInput)) {
        Swal.fire({ confirmButtonColor: "#0ea0ee", icon: "warning", title: "Napaka", text: "Uporabniško ime lahko vsebuje samo črke in številke!" });
        return;
      }

      

      if (!validatePassword(passwordInput)) {
        Swal.fire({
          confirmButtonColor: "#0ea0ee",
          icon: "error",
          title: "Slabo geslo",
          text: "Geslo mora imeti vsaj 8 znakov, male in velike črke ter številke."
        });
        return;
      }

    
      const birthDate = new Date(birthday);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
    
      if (age < 18) {
        Swal.fire({
          confirmButtonColor: "#0ea0ee",
          icon: "warning",
          title: "Napaka",
          text: "Za registracijo moraš biti starejši od 18 let!"
        });
        return;
      }

      
      window.location.href = "registracija2.html";
    });
  });