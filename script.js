// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.35)";
        navbar.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

    }

});

// =========================
// TERMINAL TYPING EFFECT
// =========================

const terminalLines = [
    "> initializing portfolio...",
    "> backend systems loaded",
    "> photography module active",
    "> security protocols online",
    "> status: available for work"
];

const terminalBody = document.querySelector(".terminal-body");

let lineIndex = 0;
let charIndex = 0;

terminalBody.innerHTML = "";

function typeTerminal(){

    if(lineIndex < terminalLines.length){

        const currentLine = terminalLines[lineIndex];

        if(charIndex < currentLine.length){

            if(!terminalBody.lastChild){

                const p = document.createElement("p");
                terminalBody.appendChild(p);

            }

            terminalBody.lastChild.textContent += currentLine.charAt(charIndex);

            charIndex++;

            setTimeout(typeTerminal, 35);

        } else {

            const p = document.createElement("p");
            terminalBody.appendChild(p);

            lineIndex++;
            charIndex = 0;

            setTimeout(typeTerminal, 300);

        }

    } else {

        const spacer = document.createElement("br");
        terminalBody.appendChild(spacer);

        const whoami = document.createElement("p");
        whoami.classList.add("terminal-accent");
        whoami.textContent = "> whoami";

        terminalBody.appendChild(whoami);

        const identity = document.createElement("p");
        identity.textContent =
        "backend developer / full stack / photographer";

        terminalBody.appendChild(identity);

    }

}

typeTerminal();

// =========================
// REVEAL ON SCROLL
// =========================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .photo-card"
);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// ACTIVE REVEAL STYLE
// =========================

const style = document.createElement("style");

style.innerHTML = `

.section,
.project-card,
.skill-card,
.photo-card{

    opacity: 0;
    transform: translateY(40px);

    transition:
    opacity 0.8s ease,
    transform 0.8s ease;

}

.active-reveal{

    opacity: 1 !important;
    transform: translateY(0) !important;

}

`;

document.head.appendChild(style);

// =========================
// PARALLAX GLOW EFFECT
// =========================

const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    glow1.style.transform =
    `translate(${x * 30}px, ${y * 30}px)`;

    glow2.style.transform =
    `translate(-${x * 30}px, -${y * 30}px)`;

});

// =========================
// PROJECT CARD HOVER TILT
// =========================

const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateX(0) rotateY(0) translateY(0)";

    });

});

// =========================
// CUSTOM CURSOR GLOW
// =========================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const cursorStyle = document.createElement("style");

cursorStyle.innerHTML = `

.custom-cursor{

    width: 18px;
    height: 18px;

    border-radius: 50%;

    background: rgba(255,43,43,0.4);

    position: fixed;

    pointer-events: none;

    transform: translate(-50%, -50%);

    z-index: 9999;

    filter: blur(2px);

    box-shadow: 0 0 20px rgba(255,43,43,0.8);

}

`;

document.head.appendChild(cursorStyle);

// =========================
// SMOOTH NAV LINK ACTIVE
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active-link");

        }

    });

});

const activeStyle = document.createElement("style");

activeStyle.innerHTML = `

.active-link{

    color: white !important;

}

.active-link::after{

    width: 100% !important;

}

`;


document.head.appendChild(activeStyle);