document.addEventListener("DOMContentLoaded", function () {

    // Initialize EmailJS
    emailjs.init({
        publicKey: "vTLFM_islqeTTHEty",
    });

    const aboutBtn = document.getElementById("aboutBtn");
    const contactBtn = document.getElementById("contactBtn");

    const aboutPanel = document.getElementById("about");
    const contactPanel = document.getElementById("contact");

    const closeButtons = document.querySelectorAll(".close-panel");

    // Open About
    aboutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        aboutPanel.classList.add("active");
    });

    // Open Contact
    contactBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactPanel.classList.add("active");
    });

    // Close popups
    closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            aboutPanel.classList.remove("active");
            contactPanel.classList.remove("active");
        });
    });

    // Close with Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            aboutPanel.classList.remove("active");
            contactPanel.classList.remove("active");
        }
    });

    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.sendForm(
                "service_e3goz1g",
                "template_m400ygc",
                this
            ).then(function () {

                alert("Your message has been sent successfully!");

                contactForm.reset();

            }).catch(function (error) {

                alert("Unable to send message.\n\nPlease try again.");

                console.log(error);

            });

        });

    }

}); 

    // ==========================================
    // PAGE LOADER
    // ==========================================

    const loader = document.getElementById("loader");

    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.classList.add("hide");

        }, 700);

    });






    