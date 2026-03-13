let input_file = document.querySelector(".input-img-journey");
let inputFullName = document.querySelector(".input-full-name");
let drag_drop_text = document.querySelector(".drag-drop");
let imgIcon = document.querySelector(".img-icon");
let fillPage = document.querySelector(".img-journey");
let input_email = document.querySelector(".input-email");
let generate_ticket = document.querySelector(".generate-ticket");
let error_upload = document.querySelector(".error-upload");
let nameTicket = document.querySelector(".name-title-ticket");
let emailTicket = document.querySelector(".email-ticket");
let main = document.querySelector("main");
let ticketPage = document.querySelector(".ticket-coding-conf");
let monthTicket = document.querySelector(".month-ticket");
let dayTicket = document.querySelector(".day-ticket");
let yearTicket = document.querySelector(".year-ticket");
let inputGithub = document.querySelector(".input-github");
let imgProfile = document.querySelector(".img-profile img");
let userName = document.querySelector(".name-user");
let userGit = document.querySelector(".user-git");

input_file.addEventListener("change", function () {
    let reader = new FileReader();
    reader.addEventListener("load", function () {
        fillPage.src = this.result;
        fillPage.style.cssText = "top: 0; left: 50%; transform: translateX(-50%); wdith: 29%; object-fit:cover; border-radius: 15px; height: 100%;";
        imgIcon.style.cssText = "display: none";
        drag_drop_text.style.cssText = "display: none";
    })

    reader.readAsDataURL(this.files[0])
})

let = months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let date = new Date();

generate_ticket.onclick = function () {

    let validEmail = /\w+\d{3,}\@[a-z]{5,}.\w+/g.test(input_email.value);
    if (validEmail === true) {
        imgProfile.src = fillPage.src;
        userName.textContent = inputFullName.value;
        userGit.textContent = inputGithub.value;
        monthTicket.textContent = months[date.getMonth()].slice(0, 3);
        dayTicket.textContent = date.getDate();
        yearTicket.textContent = date.getFullYear();
        main.style.cssText = "display: none;";
        ticketPage.style.cssText = "display: block;";
        nameTicket.textContent = inputFullName.value;
        error_upload.style.cssText = " opacity: 0;";
        emailTicket.textContent = input_email.value;

    } else {
        input_email.style.cssText = "border-color: var(--orange-500);";
        error_upload.style.cssText = "opacity:1; color: var(--orange-500);";

    }
}

