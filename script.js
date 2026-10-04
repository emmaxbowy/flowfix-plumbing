// ================================
// FLOWFIX PLUMBING JAVASCRIPT
// ================================


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll("section");

const revealSections = () => {

    const windowHeight = window.innerHeight;

    sections.forEach((section) => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("show");
        }

    });
};


window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = contactForm
            .querySelector('input[name="name"]')
            .value.trim();

        const email = contactForm
            .querySelector('input[name="email"]')
            .value.trim();

        const message = contactForm
            .querySelector('textarea[name="message"]')
            .value.trim();


        if (!name || !email || !message) {

            alert("Please fill in all required fields.");

            return;
        }


        alert(
            `Thanks ${name}! Your request has been received. We will contact you soon.`
        );


        contactForm.reset();

    });

}


// ================================
// SMOOTH NAVIGATION
// ================================

const navigationLinks = document.querySelectorAll(
    '.nav-links a, .footer-links a'
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ================================
// BUTTON CLICK FEEDBACK
// ================================

const quoteButtons = document.querySelectorAll(
    '.primary-btn[href="#contact"]'
);

quoteButtons.forEach((button) => {

    button.addEventListener("click", function () {

        setTimeout(() => {

            const contactSection =
                document.getElementById("contact");

            if (contactSection) {

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }, 50);

    });

});


// ================================
// PHONE LINK TRACKING
// ================================

const phoneLinks = document.querySelectorAll(
    'a[href^="tel:"]'
);

phoneLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Phone call button clicked.");

    });

});


// ================================
// WHATSAPP BUTTON
// ================================

const whatsappButton =
    document.querySelector(".whatsapp-btn");

if (whatsappButton) {

    whatsappButton.addEventListener("click", () => {

        console.log("WhatsApp button clicked.");

    });

}
