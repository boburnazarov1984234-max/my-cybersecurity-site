// ===== TYPING EFFECT =====

const text = "Cyber Security Enthusiast";
let index = 0;

function typeText() {
    const typing = document.getElementById("typing");

    if (typing && index < text.length) {
        typing.textContent += text[index];
        index++;

        setTimeout(typeText, 100);
    }
}

typeText();


// ===== ABOUT BUTTON =====

function goToAbout() {
    const about = document.getElementById("about");

    if (about) {
        about.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===== SKILLS =====

function showSkill(skill) {

    const result = document.getElementById("skill-result");

    if (!result) return;

    if (skill === "HTML") {
        result.textContent =
            "HTML — web sahifaning tuzilishini yaratish uchun ishlatiladi.";
    }

    else if (skill === "CSS") {
        result.textContent =
            "CSS — saytning ranglari, dizayni va animatsiyalarini boshqaradi.";
    }

    else if (skill === "Python") {
        result.textContent =
            "Python — dasturlash va avtomatlashtirish uchun ishlatiladi.";
    }

    else if (skill === "Cyber Security") {
        result.textContent =
            "Cyber Security — kompyuter tizimlari va ma'lumotlarni himoya qilish sohasi.";
    }
}


// ===== PROJECT MODAL =====

function showProject(project) {

    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (!modal || !title || !description) return;

    if (project === "Portfolio Website") {

        title.textContent = "Portfolio Website";

        description.textContent =
            "HTML, CSS va JavaScript yordamida yaratilgan shaxsiy portfolio sayti. Bu loyihada web dizayn, animatsiya va JavaScript funksiyalaridan foydalanilgan.";
    }

    else if (project === "Python Projects") {

        title.textContent = "Python Projects";

        description.textContent =
            "Python dasturlash tilini o‘rganish jarayonida yaratilgan kichik dasturlar, masalalar va amaliy loyihalar.";
    }

    else if (project === "Cyber Security") {

        title.textContent = "Cyber Security";

        description.textContent =
            "Kiberxavfsizlik bo‘yicha o‘rganayotgan bilimlarim, amaliy mashqlarim va kelajakdagi security loyihalarim.";
    }

    modal.style.display = "flex";
}


// ===== CLOSE PROJECT =====

function closeProject() {

    const modal = document.getElementById("project-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ===== MODAL CLICK =====

window.addEventListener("click", function(event) {

    const modal = document.getElementById("project-modal");

    if (modal && event.target === modal) {
        closeProject();
    }

});


// ===== MOBILE MENU =====

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";

        });

    });

}


// ===== CONTACT FORM =====

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (formMessage) {
            formMessage.textContent = "Xabaringiz yuborildi! ✅";
        }

        contactForm.reset();

    });

}
// ===== SCROLL TO TOP =====

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}