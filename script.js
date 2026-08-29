"use strict";

/* =========================================
   APPLICATION DATA
========================================= */

const pages = {

    home: {
        title: "Home",

        content: `
            <section class="page hero fade-in">

                <div class="container hero-grid">

                    <div>

                        <p class="eyebrow">
                            SINGLE PAGE APPLICATION
                        </p>

                        <h1>
                            Build Better Digital Experiences
                        </h1>

                        <p class="hero-description">
                            NovaSpace is a small-scale Single Page
                            Application created using HTML, CSS
                            and vanilla JavaScript.
                        </p>

                        <div class="hero-buttons">

                            <a
                                href="/services"
                                data-link
                                class="btn primary-btn"
                            >
                                Explore Services
                            </a>

                            <a
                                href="/about"
                                data-link
                                class="btn secondary-btn"
                            >
                                Learn More
                            </a>

                        </div>

                    </div>


                    <div class="hero-card">

                        <div
                            class="hero-icon"
                            aria-hidden="true"
                        >
                            ⚡
                        </div>

                        <h2>
                            Fast & Seamless
                        </h2>

                        <p>
                            Navigate between pages without
                            performing a complete browser reload.
                        </p>

                    </div>

                </div>

            </section>
        `
    },


    about: {
        title: "About",

        content: `
            <section class="page fade-in">

                <div class="page-header">

                    <div class="container">

                        <p class="eyebrow">
                            ABOUT NOVASPACE
                        </p>

                        <h1>
                            About This Project
                        </h1>

                        <p>
                            This project demonstrates the basic
                            architecture of a Single Page Application
                            using vanilla JavaScript.
                        </p>

                    </div>

                </div>


                <div class="section">

                    <div class="container about-grid">

                        <div>

                            <h2>
                                Why an SPA?
                            </h2>

                            <p>
                                A Single Page Application dynamically
                                changes the content displayed to the
                                user without requiring a complete
                                page reload.
                            </p>

                        </div>


                        <div class="about-content">

                            <p>
                                The application uses the browser
                                History API to update the URL while
                                JavaScript controls which content
                                is rendered.
                            </p>

                            <p>
                                This creates a smoother navigation
                                experience and demonstrates the
                                fundamental concepts used by modern
                                frontend applications.
                            </p>

                        </div>

                    </div>


                    <div class="container">

                        <div class="stats">

                            <div class="stat">
                                <strong>3</strong>
                                <span>Core Technologies</span>
                            </div>

                            <div class="stat">
                                <strong>4</strong>
                                <span>Application Routes</span>
                            </div>

                            <div class="stat">
                                <strong>0</strong>
                                <span>Full Page Reloads</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        `
    },


    services: {
        title: "Services",

        content: `
            <section class="page fade-in">

                <div class="page-header">

                    <div class="container">

                        <p class="eyebrow">
                            OUR SERVICES
                        </p>

                        <h1>
                            What We Build
                        </h1>

                        <p>
                            Example services represented inside
                            this SPA project.
                        </p>

                    </div>

                </div>


                <div class="section">

                    <div class="container">

                        <div class="services-grid">

                            <article class="service-card">

                                <h3>
                                    🌐 Web Development
                                </h3>

                                <p>
                                    Responsive websites built using
                                    modern HTML, CSS and JavaScript.
                                </p>

                            </article>


                            <article class="service-card">

                                <h3>
                                    📱 Responsive Design
                                </h3>

                                <p>
                                    Flexible interfaces that adapt
                                    to desktops, tablets and mobile
                                    devices.
                                </p>

                            </article>


                            <article class="service-card">

                                <h3>
                                    ⚡ Performance
                                </h3>

                                <p>
                                    Lightweight frontend implementations
                                    designed for efficient loading.
                                </p>

                            </article>


                            <article class="service-card">

                                <h3>
                                    ♿ Accessibility
                                </h3>

                                <p>
                                    Interfaces designed with semantic
                                    HTML and keyboard accessibility
                                    in mind.
                                </p>

                            </article>

                        </div>

                    </div>

                </div>

            </section>
        `
    },


    contact: {
        title: "Contact",

        content: `
            <section class="page fade-in">

                <div class="page-header">

                    <div class="container">

                        <p class="eyebrow">
                            CONTACT
                        </p>

                        <h1>
                            Get in Touch
                        </h1>

                        <p>
                            Submit the form to test client-side
                            interaction inside the SPA.
                        </p>

                    </div>

                </div>


                <div class="section">

                    <div class="container contact-container">

                        <form
                            class="contact-form"
                            id="contactForm"
                            novalidate
                        >

                            <div class="form-group">

                                <label for="contactName">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="contactName"
                                    required
                                >

                                <span
                                    id="nameError"
                                    class="error"
                                ></span>

                            </div>


                            <div class="form-group">

                                <label for="contactEmail">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="contactEmail"
                                    required
                                >

                                <span
                                    id="emailError"
                                    class="error"
                                ></span>

                            </div>


                            <div class="form-group">

                                <label for="contactMessage">
                                    Message
                                </label>

                                <textarea
                                    id="contactMessage"
                                    rows="6"
                                    required
                                ></textarea>

                                <span
                                    id="messageError"
                                    class="error"
                                ></span>

                            </div>


                            <button
                                type="submit"
                                class="btn primary-btn"
                            >
                                Send Message
                            </button>


                            <p
                                id="formSuccess"
                                class="success"
                                aria-live="polite"
                            ></p>

                        </form>

                    </div>

                </div>

            </section>
        `
    }

};


/* =========================================
   APPLICATION ELEMENT
========================================= */

const app =
    document.getElementById("app");

const nav =
    document.getElementById("mainNav");

const menuToggle =
    document.getElementById("menuToggle");


/* =========================================
   ROUTE DETECTION
========================================= */

function getRoute() {

    const path =
        window.location.pathname;

    if (path === "/" || path === "/index.html") {
        return "home";
    }

    const route =
        path.replace("/", "").toLowerCase();

    return pages[route]
        ? route
        : "404";
}


/* =========================================
   RENDER PAGE
========================================= */

function renderPage(route, addHistory = false) {

    if (route === "404") {

        app.innerHTML = `
            <section class="not-found fade-in">

                <div>

                    <h1>
                        404
                    </h1>

                    <h2>
                        Page Not Found
                    </h2>

                    <p>
                        The page you are looking for does not exist.
                    </p>

                    <a
                        href="/"
                        data-link
                        class="btn primary-btn"
                    >
                        Return Home
                    </a>

                </div>

            </section>
        `;

        document.title =
            "404 | NovaSpace";

        updateActiveNavigation(null);

        return;
    }


    app.innerHTML =
        pages[route].content;

    document.title =
        `${pages[route].title} | NovaSpace`;


    updateActiveNavigation(route);

    initializePageEvents();


    if (addHistory) {

        history.pushState(
            { route },
            "",
            route === "home"
                ? "/"
                : `/${route}`
        );
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   NAVIGATION ACTIVE STATE
========================================= */

function updateActiveNavigation(route) {

    const links =
        nav.querySelectorAll("[data-route]");

    links.forEach((link) => {

        const isActive =
            link.dataset.route === route;

        link.classList.toggle(
            "active",
            isActive
        );

    });
}


/* =========================================
   LINK HANDLING
========================================= */

document.addEventListener("click", (event) => {

    const link =
        event.target.closest("[data-link]");

    if (!link) {
        return;
    }


    const url =
        new URL(
            link.href,
            window.location.origin
        );


    if (
        url.origin !== window.location.origin
    ) {
        return;
    }


    event.preventDefault();


    const path =
        url.pathname;

    let route;

    if (
        path === "/" ||
        path === "/index.html"
    ) {
        route = "home";
    } else {
        route =
            path.substring(1);
    }


    if (!pages[route]) {
        route = "404";
    }


    if (route !== "404") {
        renderPage(route, true);
    } else {

        history.pushState(
            {},
            "",
            path
        );

        renderPage("404");
    }


    closeMobileMenu();
});


/* =========================================
   BROWSER BACK / FORWARD
========================================= */

window.addEventListener(
    "popstate",
    () => {

        const route =
            getRoute();

        renderPage(route);

        closeMobileMenu();
    }
);


/* =========================================
   MOBILE MENU
========================================= */

menuToggle.addEventListener(
    "click",
    () => {

        const isOpen =
            nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";
    }
);


function closeMobileMenu() {

    nav.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuToggle.textContent = "☰";
}


/* =========================================
   PAGE-SPECIFIC EVENTS
========================================= */

function initializePageEvents() {

    const contactForm =
        document.getElementById("contactForm");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        handleContactForm
    );
}


/* =========================================
   CONTACT FORM
========================================= */

function handleContactForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName");

    const email =
        document.getElementById("contactEmail");

    const message =
        document.getElementById("contactMessage");


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const formSuccess =
        document.getElementById("formSuccess");


    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";


    let valid = true;


    if (name.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email.value.trim())) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    if (message.value.trim().length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;
    }


    if (!valid) {
        return;
    }


    formSuccess.textContent =
        "✓ Message submitted successfully!";


    event.target.reset();

}


/* =========================================
   INITIAL APPLICATION LOAD
========================================= */

const initialRoute =
    getRoute();

renderPage(initialRoute);
