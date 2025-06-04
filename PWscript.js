document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ['hey, <span style="color: var(--main-color)">it\'s Sanjana!</span>'],
        typeSpeed: 90,
        loop: true
    });

    //Experience Tabs
    window.showExperience = function (id) {
        const panels = document.querySelectorAll('.experience-panel');
        panels.forEach(panel => panel.classList.remove('active'));

        document.getElementById(id).classList.add('active');

        const buttons = document.querySelectorAll('.tab-buttons li');
        buttons.forEach(btn => btn.classList.remove('active'));

        const clickedButton = [...buttons].find(btn =>
            btn.getAttribute('onclick')?.includes(id)
        );
        if (clickedButton) clickedButton.classList.add('active');
    };
});