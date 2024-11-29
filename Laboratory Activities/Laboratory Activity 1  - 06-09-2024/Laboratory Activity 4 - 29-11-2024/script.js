// Snowfall Animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Random snowflake character
    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉', '❋', '❊'];
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    
    // Random starting position
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // Random properties for variety
    const duration = Math.random() * 3 + 2; // 2-5 seconds
    const size = Math.random() * 15 + 10; // 10-25px
    const opacity = Math.random() * 0.6 + 0.4; // 0.4-1
    
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.fontSize = size + 'px';
    snowflake.style.opacity = opacity;
    
    // Add some horizontal movement
    snowflake.style.setProperty('--wind', (Math.random() * 20 - 10) + 'px');
    
    document.body.appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

function generateSnowflakes() {
    // Create initial batch of snowflakes
    for(let i = 0; i < 20; i++) {
        setTimeout(createSnowflake, Math.random() * 2000);
    }
    // Continue creating snowflakes
    setInterval(createSnowflake, 100);
}

// Interactive Elements
function addInteractiveEffects() {
    // Add sparkle effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.textShadow = '0 0 10px var(--gold), 0 0 20px var(--gold)';
        });
        heading.addEventListener('mouseout', () => {
            heading.style.textShadow = 'none';
        });
    });

    // Add hover effect to contact items
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'translateX(20px)';
            setTimeout(() => {
                item.style.transform = 'translateX(10px)';
            }, 200);
        });
    });

    // Add hover effect to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.3)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });
}

// Initialize all features
window.addEventListener('load', () => {
    generateSnowflakes();
    addInteractiveEffects();
});
