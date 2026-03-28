// Butterfly Flock Component
// 7 small butterflies that flap their wings and react to scrolling

const BUTTERFLIES = [
    { x: 28,  y: 0,   size: 26, speed: 1.9, delay: 0.0,  float: 0 },
    { x: 118, y: 22,  size: 20, speed: 2.2, delay: 0.35, float: 1 },
    { x: 62,  y: 60,  size: 28, speed: 1.7, delay: 0.7,  float: 2 },
    { x: 160, y: 8,   size: 18, speed: 2.5, delay: 1.05, float: 0 },
    { x: 6,   y: 100, size: 22, speed: 2.0, delay: 0.5,  float: 1 },
    { x: 132, y: 90,  size: 17, speed: 2.6, delay: 1.3,  float: 2 },
    { x: 76,  y: 142, size: 24, speed: 1.8, delay: 0.2,  float: 0 },
];

function butterflySvg(b, i) {
    // Viewbox 40×32. Body axis at x=20.
    // Left wings anchor at x=20, right wings anchor at x=20.
    return `
        <div class="bf-item"
             style="width:${b.size}px;height:${Math.round(b.size * 0.8)}px;
                    animation:bf-float-${b.float} ${(3.8 + i * 0.35).toFixed(1)}s ease-in-out infinite ${b.delay}s;
                    --bf-speed:${b.speed}s;">
            <svg viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g class="bf-wing-l">
                    <path d="M20 14 C14 6 3 5 2 13 C1 20 9 24 20 18 Z" fill="#98bbce" opacity="0.62"/>
                    <path d="M20 18 C12 20 5 26 7 29 C10 32 18 28 20 22 Z" fill="#98bbce" opacity="0.44"/>
                </g>
                <g class="bf-wing-r">
                    <path d="M20 14 C26 6 37 5 38 13 C39 20 31 24 20 18 Z" fill="#98bbce" opacity="0.62"/>
                    <path d="M20 18 C28 20 35 26 33 29 C30 32 22 28 20 22 Z" fill="#98bbce" opacity="0.44"/>
                </g>
                <ellipse cx="20" cy="16" rx="1.5" ry="7" fill="#7ea8c0" opacity="0.85"/>
            </svg>
        </div>`;
}

export function Butterfly() {
    const items = BUTTERFLIES.map((b, i) => `
        <div class="bf-wrapper"
             style="left:${b.x}px;top:${b.y}px;"
             data-speed="${b.speed}">
            ${butterflySvg(b, i)}
        </div>`).join('');

    return `<div class="butterfly-container" aria-hidden="true">${items}</div>`;
}

export function initButterfly() {
    const container = document.querySelector('.butterfly-container');
    if (!container) return;

    const items = Array.from(container.querySelectorAll('.bf-item'));
    let lastY = 0;
    let raf = null;
    let resetTimer;

    const tick = () => {
        const sy = window.pageYOffset;
        const delta = sy - lastY;
        const speed = Math.abs(delta);

        // Parallax — drift down with scroll, gentle horizontal sine
        const tx = Math.sin(sy * 0.004) * 40;
        const maxTy = window.innerHeight * 0.52;
        const ty = Math.min(sy * 0.22, maxTy);
        // Slight tilt toward scroll direction
        const tilt = Math.sign(delta) * Math.min(speed * 0.22, 5);

        container.style.transform = `translate(${tx}px, ${ty}px) rotate(${tilt}deg)`;

        // Faster flapping while scrolling fast
        if (speed > 4) {
            const mult = Math.max(0.32, 1 - speed * 0.038);
            items.forEach(el => {
                const wrapper = el.closest('.bf-wrapper');
                const orig = parseFloat(wrapper?.dataset.speed ?? '2');
                el.style.setProperty('--bf-speed', `${(orig * mult).toFixed(2)}s`);
            });
        }

        lastY = sy;
        raf = null;
    };

    // Reset flap speed shortly after scroll stops
    const resetSpeeds = () => {
        items.forEach(el => {
            const wrapper = el.closest('.bf-wrapper');
            const orig = wrapper?.dataset.speed ?? '2';
            el.style.setProperty('--bf-speed', `${orig}s`);
        });
    };

    window.addEventListener('scroll', () => {
        if (!raf) raf = requestAnimationFrame(tick);
        clearTimeout(resetTimer);
        resetTimer = setTimeout(resetSpeeds, 450);
    }, { passive: true });
}
