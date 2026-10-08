// ==========================================
// PAGE NAVIGATION
// ==========================================

function showSection(sectionId, clickedButton = null) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });


    const selected =
        document.getElementById(sectionId);

    if (selected) {
        selected.classList.add("active");
    }


    // Navigation active state

    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    } else {

        navItems.forEach(item => {

            const text =
                item.innerText.toLowerCase();

            if (
                sectionId === "dashboard" &&
                text.includes("dashboard")
            ) {
                item.classList.add("active");
            }

            if (
                sectionId === "events" &&
                text.includes("events")
            ) {
                item.classList.add("active");
            }

            if (
                sectionId === "registrations" &&
                text.includes("registrations")
            ) {
                item.classList.add("active");
            }

            if (
                sectionId === "addRegistration" &&
                text.includes("register")
            ) {
                item.classList.add("active");
            }

        });

    }


    // Update page title

    const titles = {

        dashboard: "Dashboard",

        events: "Campus Events",

        registrations: "Registrations",

        addRegistration: "Event Registration"

    };


    document.getElementById("pageTitle").innerText =
        titles[sectionId] || "Dashboard";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// DATE
// ==========================================

function displayDate() {

    const date = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    document.getElementById("currentDate").innerText =
        date.toLocaleDateString("en-IN", options);

}

displayDate();


// ==========================================
// REGISTER FROM EVENT CARD
// ==========================================

function openRegistration(eventName) {

    showSection("addRegistration");

    const eventSelect =
        document.getElementById("event");

    eventSelect.value = eventName;

}


// ==========================================
// FORM SUBMISSION
// ==========================================

function submitRegistration(event) {

    event.preventDefault();


    const name =
        document.getElementById("studentName").value;

    const selectedEvent =
        document.getElementById("event").value;


    if (!name || !selectedEvent) {

        alert("Please fill all required fields.");

        return;

    }


    // Show success notification

    const toast =
        document.getElementById("toast");

    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);


    // Reset form

    document
        .getElementById("registrationForm")
        .reset();


    // Go to registrations

    setTimeout(() => {

        showSection("registrations");

    }, 800);

}


// ==========================================
// SEARCH TABLE
// ==========================================

function searchTable() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const rows =
        document.querySelectorAll(
            "#registrationTable tbody tr"
        );


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();


        if (text.includes(input)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


// ==========================================
// FILTER STATUS
// ==========================================

function filterStatus(status) {

    const rows =
        document.querySelectorAll(
            "#registrationTable tbody tr"
        );


    rows.forEach(row => {

        const rowStatus =
            row
            .querySelector(".status")
            ?.innerText;


        if (
            status === "all" ||
            rowStatus === status
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

}


// ==========================================
// DELETE REGISTRATION
// ==========================================

function deleteRegistration(button) {

    const confirmation =
        confirm(
            "Are you sure you want to delete this registration?"
        );


    if (!confirmation) {
        return;
    }


    const row =
        button.closest("tr");


    row.remove();


    showDeleteMessage();

}


// ==========================================
// DELETE MESSAGE
// ==========================================

function showDeleteMessage() {

    const toast =
        document.getElementById("toast");


    toast.querySelector("strong")
        .innerText =
        "Registration Deleted";


    toast.querySelector("p")
        .innerText =
        "Record removed successfully.";


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

        toast.querySelector("strong")
            .innerText =
            "Registration Successful";

        toast.querySelector("p")
            .innerText =
            "Student has been registered.";

    }, 3000);

}