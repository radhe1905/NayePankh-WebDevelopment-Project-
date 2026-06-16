
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    counter.innerText = '0';

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});



const form = document.getElementById("volunteerForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const phone = document.getElementById("phone").value;

        const message = document.getElementById("message");



        if (phone.length != 10) {

            message.style.color = "red";

            message.innerText =

                "Please enter a valid 10-digit phone number.";

            return;

        }



        message.style.color = "green";

        message.innerText =

            "🎉 Application Submitted Successfully!";



        form.reset();

    });

}

const btn = document.getElementById("theme-btn");

btn?.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        btn.innerHTML = "☀️";

    }

    else {

        btn.innerHTML = "🌙";

    }

});
