document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth)); // Random X position
        const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight)); // Random Y position

        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;

        button.addEventListener("click", function () {
            alert(this.getAttribute("data-message"));
        });
    });
});







