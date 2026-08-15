// ================================
// Mobile Menu
// ================================

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

if (menuIcon && navLinks) {

    menuIcon.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }

    });


    // Close menu after clicking a link

    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(item => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });

}


// ================================
// Typing Animation
// ================================

const roles = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Software Engineer"
];

const aboutHeading = document.querySelector(".about-content h3");

if (aboutHeading) {

    const typingText = document.createElement("span");

    typingText.className = "typing-text";

    aboutHeading.appendChild(document.createElement("br"));
    aboutHeading.appendChild(typingText);

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingText.textContent =
                currentRole.substring(0, characterIndex + 1);

            characterIndex++;

            if (characterIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingText.textContent =
                currentRole.substring(0, characterIndex - 1);

            characterIndex--;

            if (characterIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex === roles.length) {
                    roleIndex = 0;
                }

            }

        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }


    typeEffect();
}


// ================================
// Scroll Reveal
// ================================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ================================
// Active Navbar
// ================================

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            currentSection = section.id;

        }

    });


    const navItems = document.querySelectorAll(".nav-links a");

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {

            item.classList.add("active");

        }

    });

});


// ================================
// Back To Top Button
// ================================

const backToTop = document.createElement("button");

backToTop.id = "back-to-top";

backToTop.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});