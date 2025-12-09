// Animated Butterfly Component
export function Butterfly() {
    return `
        <div class="butterfly-container">
            <svg class="butterfly" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Wing -->
                <g class="wing wing-left">
                    <ellipse cx="70" cy="80" rx="35" ry="50" fill="#98bbce" opacity="0.3"/>
                    <ellipse cx="65" cy="70" rx="25" ry="35" fill="#98bbce" opacity="0.4"/>
                    <ellipse cx="68" cy="75" rx="15" ry="20" fill="#98bbce" opacity="0.5"/>
                </g>
                
                <!-- Right Wing -->
                <g class="wing wing-right">
                    <ellipse cx="130" cy="80" rx="35" ry="50" fill="#98bbce" opacity="0.3"/>
                    <ellipse cx="135" cy="70" rx="25" ry="35" fill="#98bbce" opacity="0.4"/>
                    <ellipse cx="132" cy="75" rx="15" ry="20" fill="#98bbce" opacity="0.5"/>
                </g>
                
                <!-- Body -->
                <ellipse cx="100" cy="90" rx="8" ry="40" fill="#98bbce" opacity="0.6"/>
                
                <!-- Antennae -->
                <path d="M 95 55 Q 90 45 88 40" stroke="#98bbce" stroke-width="2" fill="none" opacity="0.5"/>
                <path d="M 105 55 Q 110 45 112 40" stroke="#98bbce" stroke-width="2" fill="none" opacity="0.5"/>
                <circle cx="88" cy="40" r="3" fill="#98bbce" opacity="0.5"/>
                <circle cx="112" cy="40" r="3" fill="#98bbce" opacity="0.5"/>
            </svg>
        </div>
    `;
}

export function initButterfly() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const butterfly = document.querySelector('.butterfly-container');
        if (!butterfly) return;
        
        const scrolled = window.pageYOffset;
        const scrollDirection = scrolled > lastScroll ? 1 : -1;
        
        // Horizontal movement based on scroll
        const horizontalMove = Math.sin(scrolled * 0.005) * 50;
        
        // Vertical follows scroll smoothly
        const verticalMove = scrolled * 0.3;
        
        // Gentle tilt based on direction
        const tilt = scrollDirection * 3;
        
        butterfly.style.transform = `translate(${horizontalMove}px, ${verticalMove}px) rotate(${tilt}deg)`;
        
        lastScroll = scrolled;
    });
}
