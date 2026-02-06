function startExperience() {
    showPage('page1b');
}

function showPage(pageId) {
    document.querySelectorAll('.container').forEach(div => {
        div.classList.add('hidden');
    });
    
    document.getElementById(pageId).classList.remove('hidden');

    if (pageId === 'page2') {
        const audio = document.getElementById('mySong');
        audio.play().then(() => {
            console.log("Music started on Page 2!");
        }).catch(e => {
            console.log("Audio error:", e);
        });
    }
}

function moveButton() {
    const btn = document.getElementById('yesBtn');
    btn.style.position = 'fixed';

    const x = Math.random() * (window.innerWidth - btn.offsetWidth - 20);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight - 20);

    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.addEventListener('touchstart', function (e) {
        e.preventDefault();
        moveButton();
    });
});

function celebrate() {
    showPage('page3');

    var duration = 5 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 70,
            origin: { x: 0 },
            colors: ['#b768a2', '#e0bbe4', '#924d9d']
        });
        confetti({
            particleCount: 10,
            angle: 120,
            spread: 70,
            origin: { x: 1 },
            colors: ['#b768a2', '#e0bbe4', '#924d9d']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
