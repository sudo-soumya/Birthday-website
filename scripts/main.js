document.addEventListener('DOMContentLoaded', function() {
    const playBtn = document.getElementById('play-btn');
    const audio = document.getElementById('bg-audio');
    const envelope = document.getElementById('envelope');

    playBtn.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Audio playback failed:', error);
        });
        playBtn.style.display = 'none';
    });

    envelope.addEventListener('click', function() {
        envelope.classList.toggle('open');
    });

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (4 + Math.random() * 2) + 's';
        heart.innerText = ['🎀''❤️'][Math.floor(Math.random()*6)];
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 800);

    document.getElementById('envelope').onclick = function(e) {
        document.getElementById('birthday-card-modal').classList.add('show');
        launchConfetti();
    };

    document.getElementById('close-card').onclick = function() {
        document.getElementById('birthday-card-modal').classList.remove('show');
    };

    document.getElementById('birthday-card-modal').onclick = function(e) {
        if (e.target === this) {
            this.classList.remove('show');
        }
    };

    // Simple confetti animation
    function launchConfetti() {
        const confetti = document.getElementById('confetti');
        confetti.innerHTML = '';
        for (let i = 0; i < 40; i++) {
            const el = document.createElement('div');
            el.className = 'confetti-piece';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.animationDelay = (Math.random() * 1.5) + 's';
            el.style.background = `hsl(${Math.random()*360},80%,80%)`;
            confetti.appendChild(el);
        }
        setTimeout(() => confetti.innerHTML = '', 2500);
    }

    // Confetti piece style
    const style = document.createElement('style');
    style.innerHTML = `
    .confetti-piece {
        position: absolute;
        top: -20px;
        width: 12px;
        height: 18px;
        border-radius: 4px;
        opacity: 0.8;
        animation: confettiDrop 2.2s cubic-bezier(.68,-0.55,.27,1.55) forwards;
    }
    @keyframes confettiDrop {
        to {
            top: 100vh;
            transform: rotate(360deg) scale(1.2);
            opacity: 0.6;
        }
    }
    `;
    document.head.appendChild(style);
});