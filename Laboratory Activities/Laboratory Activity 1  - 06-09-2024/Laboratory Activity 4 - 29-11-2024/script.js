function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const snowflakes = ['❄', '❅', '❆', '✻', '✼', '❉', '❋', '❊'];
    snowflake.innerHTML = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    
    snowflake.style.left = Math.random() * 100 + 'vw';
    const duration = Math.random() * 3 + 2; 
    const size = Math.random() * 15 + 10; 
    const opacity = Math.random() * 0.6 + 0.4; 
    
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.fontSize = size + 'px';
    snowflake.style.opacity = opacity;
    snowflake.style.setProperty('--wind', (Math.random() * 20 - 10) + 'px');
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

function generateSnowflakes() {
    for(let i = 0; i < 20; i++) {
        setTimeout(createSnowflake, Math.random() * 2000);
    }
    setInterval(createSnowflake, 100);
}

function addInteractiveEffects() {
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', () => {
            heading.style.textShadow = '0 0 10px var(--gold), 0 0 20px var(--gold)';
        });
        heading.addEventListener('mouseout', () => {
            heading.style.textShadow = 'none';
        });
    });

    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'translateX(20px)';
            setTimeout(() => {
                item.style.transform = 'translateX(10px)';
            }, 200);
        });
    });

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

window.addEventListener('load', () => {
    generateSnowflakes();
    addInteractiveEffects();
});
