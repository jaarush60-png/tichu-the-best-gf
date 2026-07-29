// ------------------------------
// PASSWORD
// ------------------------------

function checkPassword() {

    let password = document.getElementById("password").value;

    if (password === "0425") {

        document.body.style.opacity = "0";

        setTimeout(function () {
            window.location.href = "poem.html";
        }, 600);

    } else {

        document.getElementById("wrong").innerHTML =
            "🌻 Oops! That's not the secret password.";

    }

}

// ------------------------------
// FALLING SUNFLOWER PETALS
// ------------------------------

const petals = document.getElementById("petals");

if (petals) {

    setInterval(() => {

        const petal = document.createElement("div");

        petal.innerHTML = "🌻";

        petal.style.position = "absolute";

        petal.style.left = Math.random() * 100 + "vw";

        petal.style.top = "-40px";

        petal.style.fontSize = (20 + Math.random() * 20) + "px";

        petal.style.opacity = Math.random();

        petal.style.transition = "transform 8s linear, top 8s linear";

        petals.appendChild(petal);

        setTimeout(() => {

            petal.style.top = "110vh";

            petal.style.transform =
                "translateX(" + (Math.random() * 200 - 100) + "px) rotate(720deg)";

        }, 100);

        setTimeout(() => {

            petal.remove();

        }, 8000);

    }, 500);

}

// ------------------------------
// SPARKLES
// ------------------------------

const sparkles = document.getElementById("sparkles");

if (sparkles) {

    setInterval(() => {

        const star = document.createElement("div");

        star.innerHTML = "✨";

        star.style.position = "absolute";

        star.style.left = Math.random() * 100 + "vw";

        star.style.top = Math.random() * 100 + "vh";

        star.style.fontSize = (10 + Math.random() * 15) + "px";

        star.style.opacity = "0";

        sparkles.appendChild(star);

        star.animate(

            [

                { opacity: 0 },

                { opacity: 1 },

                { opacity: 0 }

            ],

            {

                duration: 2000

            }

        );

        setTimeout(() => {

            star.remove();

        }, 2000);

    }, 300);

}

// ------------------------------
// PAGE FADE
// ------------------------------

window.onload = function () {

    document.body.style.opacity = "0";

    document.body.style.transition = "opacity 1s";

    setTimeout(() => {

        document.body.style.opacity = "1";

    }, 100);

};

// ------------------------------
// PERSISTENT BACKGROUND MUSIC
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("bg-music");

    if (audio) {

        // Restore playback position
        const savedTime = localStorage.getItem("audioCurrentTime");
        if (savedTime) {
            audio.currentTime = parseFloat(savedTime);
        }

        // Try playing audio automatically
        audio.play().catch(() => {
            // Browsers sometimes block autoplay until a user clicks on the page
            document.addEventListener("click", () => audio.play(), { once: true });
        });

        // Continuously update saved time in local storage
        audio.addEventListener("timeupdate", () => {
            localStorage.setItem("audioCurrentTime", audio.currentTime);
        });

    }
});
