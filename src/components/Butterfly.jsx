// Animated Butterfly Component
export function Butterfly() {
    return `
        <div class="butterfly-container">
            <svg class="butterfly" viewBox="0 0 75 85" xmlns="http://www.w3.org/2000/svg">
                <!-- Left Wing -->
                <g class="wing wing-left">
                    <path d="M47.9546 27.6853C50.5849 32.5483 52.0754 39.8424 51.4617 56.5969C63.4736 42.2738 67.2574 2.23649 56.5032 14.5559C51.0233 20.8333 47.9546 27.6853 47.9546 27.6853Z" fill="#98BBCE" opacity="0.4"/>
                </g>
                
                <!-- Right Wing -->
                <g class="wing wing-right">
                    <path d="M9.24502 57.7906C15.8892 47.0483 29.2356 55.2172 39.0555 57.8254C46.2843 59.7454 29.6266 53.889 21.169 48.9491C12.3136 43.7769 13.2878 38.9803 13.5849 32.2388C13.7856 27.6853 17.4866 20.6565 18.1442 15.3075C18.492 12.4782 18.4566 10.7323 17.7496 7.88065C16.7851 3.99041 19.4724 -0.108279 22.7472 0.851708C30.2875 3.06206 44.8422 20.4355 48.656 38.251C50.5753 47.2167 50.9397 54.5539 48.3493 61.3714C45.4858 68.9077 39.2308 74.8104 34.5839 78.1259C29.1151 82.0279 23.1858 85.0223 18.758 84.8012C14.5933 84.5933 12.0507 80.025 9.11349 80.8668C6.61483 81.5828 2.62532 87.7349 0.477205 84.9338C-2.06544 81.6183 6.30778 79.6732 7.84216 74.8546C9.27119 70.3668 4.18734 65.9679 9.24502 57.7906Z" fill="#98BBCE" opacity="0.4"/>
                </g>
                
                <!-- Body Details -->
                <path d="M44.2723 78.9217C41.4316 82.1488 37.9673 84.4769 37.828 83.1656C37.7105 82.0604 39.3663 80.78 40.7213 78.9217C41.8173 77.4186 42.4111 76.5345 43.5709 74.5009C45.2097 71.6275 44.8284 72.2464 45.9382 69.7708C46.9092 67.6046 47.2906 66.6763 48.3493 64.8196C49.3576 63.0513 50.2782 61.3714 51.3303 59.8241C53.1039 57.2159 53.4346 56.8181 54.9251 54.4751C55.7773 53.1356 55.7142 51.2921 56.8979 50.4522C57.8553 49.7728 58.0264 50.0968 58.5199 49.5681C59.2213 48.8165 59.4034 48.1447 59.9228 46.783C60.5804 45.0589 61.1033 44.1419 62.1586 42.6275C63.2984 40.9919 64.3008 40.0249 65.6218 38.7815C66.9336 37.5469 67.5069 36.9248 68.6029 36.2175C69.0611 35.9217 69.9035 35.9542 70.0496 36.4827C70.1888 36.9864 69.9316 37.1803 69.7561 37.3126L69.7427 37.3227C68.7782 38.0521 68.4172 37.5788 67.4192 38.2068C66.0424 39.0732 64.5314 40.3771 63.5176 41.655C61.9043 43.6885 61.1503 44.9705 60.4927 46.783C60.1393 47.7571 59.6597 49.9217 59.6597 49.9217C59.6597 49.9217 61.764 47.4019 63.386 46.0757C65.3859 44.4406 67.3315 43.158 68.0768 42.7602C69.7647 41.859 70.7657 41.4781 72.2415 40.9477C73.0561 40.6549 74.3578 40.5056 74.3311 41.3897C74.3195 41.7729 74.0827 41.8318 73.8197 41.876C72.4607 42.1044 71.9346 41.4781 69.7427 42.4949C67.3927 43.585 65.816 44.7053 63.7806 46.4294C61.5886 48.2861 60.2087 50.0101 60.2735 50.7617C60.3457 51.5986 60.5804 51.6458 60.4488 52.4415C60.3216 53.2116 59.5721 54.254 59.046 54.7845C57.8627 55.9777 57.0732 56.5086 56.2841 58.1885C55.3212 60.2385 55.2728 60.443 53.6538 63.7586C51.912 67.3258 52.3386 67.3836 48.7877 73.0421C47.3049 75.405 47.7356 74.9872 44.2723 78.9217Z" fill="#98BBCE" opacity="0.4"/>
            </svg>
        </div>
    `;
}

export function initButterfly() {
    let lastScroll = 0;
    let scrollSpeed = 0;
    
    window.addEventListener('scroll', () => {
        const butterfly = document.querySelector('.butterfly-container');
        if (!butterfly) return;
        
        const scrolled = window.pageYOffset;
        const scrollDirection = scrolled > lastScroll ? 1 : -1;
        scrollSpeed = Math.abs(scrolled - lastScroll);
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        
        // Boundaries: navbar height and footer start
        const navbarHeight = 100;
        const footerHeight = 500;
        const maxVertical = maxScroll - footerHeight;
        
        // Horizontal movement - more to the left
        const horizontalMove = Math.sin(scrolled * 0.008) * 120 - 80;
        
        // Vertical follows scroll smoothly but stays within boundaries
        let verticalMove = scrolled * 0.35;
        verticalMove = Math.max(navbarHeight, Math.min(verticalMove, maxVertical));
        
        // Tilt based on direction and speed
        const tilt = scrollDirection * Math.min(scrollSpeed * 0.5, 8);
        
        // Faster flapping when scrolling
        const flapSpeed = 1.5 - Math.min(scrollSpeed * 0.05, 0.8);
        butterfly.style.setProperty('--flap-speed', `${flapSpeed}s`);
        
        butterfly.style.transform = `translate(${horizontalMove}px, ${verticalMove}px) rotate(${tilt}deg)`;
        
        lastScroll = scrolled;
    });
}
