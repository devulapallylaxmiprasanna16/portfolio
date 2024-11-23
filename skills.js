document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        const percentage = bar.getAttribute("data-percentage");
        setTimeout(() => {
            bar.style.width = percentage;
        }, 500); // Delay for smooth animation effect
    });
});
