const globalPetNames = [
    "Suchi Ma ❤️", "Thango 💖", "Ammu 🌸", "Chello 💕", 
    "Tiger Kutty 🐯❤️", "Thanga Pulla 💕", "My Princess 👑", 
    "My Home 🏠", "My Safe Place 🛡️", "My Forever ♾️", 
    "My Beautiful Smile 😊", "My Happiness ✨"
];
let rotationCounter = 0;

function loadNextDynamicToken() {
    const targetedToken = globalPetNames[rotationCounter];
    rotationCounter = (rotationCounter + 1) % globalPetNames.length;
    return `<span class="rotating-name-marker">${targetedToken}</span>`;
}

const textRenderer = document.getElementById('textRenderer');
const mainViewport = document.getElementById('mainViewport');
const displayCard = document.getElementById('displayCard');
const controlsTray = document.getElementById('controlsTray');

async function initiateLoveStoryTimeline() {
    // --- SCENE 1: Intro ---
    document.getElementById('envStars').style.opacity = '0.6';
    allocateParticles('❤️', 12);
    allocateParticles('✨', 8); 

    await switchText("Hi Suchi Ma..."); await hold(2500);
    await switchText("Before you read anything..."); await hold(2500);
    await switchText("Close your eyes for just one second..."); await hold(3000);

    // Dynamic Heartbeat Flash Phase
    mainViewport.classList.add('heartbeat-active');
    displayCard.style.opacity = '0';
    await hold(3500);
    mainViewport.classList.remove('heartbeat-active');
    displayCard.style.opacity = '1';

    await switchText("Thank you..."); await hold(2000);
    await switchText("Thank you for giving me one last chance."); await hold(3500);

    // --- SCENE 2: Rain Downpour ---
    document.getElementById('envRain').style.opacity = '0.7';
    mainViewport.style.background = '#f0a5b0';
    allocateParticles('💔', 8);
    await switchText("I know... 💔"); await hold(2000);
    await switchText("I hurt you."); await hold(2000);
    await switchText("I made you feel unloved."); await hold(2500);
    await switchText("That is something I can never be proud of."); await hold(3800);

    // --- SCENE 3: Recovery & Sunlight ---
    document.getElementById('envRain').style.opacity = '0';
    mainViewport.style.background = 'radial-gradient(circle, #ffe5ec 0%, #ffc2d1 100%)'; 
    allocateParticles('🌸', 20);
    await switchText(`But ${loadNextDynamicToken()}...`); await hold(2500);
    await switchText("Every mistake taught me how precious you really are."); await hold(3800);

    // --- SCENE 4: Heartfelt Commitments ---
    const commitmentsList = [
        "✨ I promise to protect your smile.",
        "✨ I promise to understand before reacting.",
        "✨ I promise to never let your tears fall because of me again.",
        "✨ I promise to become your peace.",
        "✨ I promise to become your safest place.",
        "✨ I promise to give you the happiest life I possibly can.",
        "✨ I promise to love you louder through my actions than my words.",
        "✨ I promise to keep choosing you every single day.",
        "✨ I promise to make our love stronger than before.",
        "✨ I promise to bring back the smiles we once shared."
    ];
    for (let operationalStatement of commitmentsList) {
        await switchText(operationalStatement);
        await hold(3200);
    }

    // --- CUTE SURPRISE POPUPS ---
    await switchText("I Love You Chello ❤️"); await hold(2000);
    await switchText("My Tiger Kutty 🐯"); await hold(2000);
    await switchText("You deserve the whole world. 🥹"); await hold(3000);

    // --- FUTURE TOGETHER & FOREVER PROMISE ---
    allocateParticles('🦋', 15);
    await switchText("I don't want yesterday..."); await hold(2000);
    await switchText("I don't want today's pain... 💔"); await hold(2000);
    await switchText("I want our forever. 💍"); await hold(3000);

    await switchText(`${loadNextDynamicToken()}...`); await hold(2500);
    await switchText("Even if life gets hard... I promise..."); await hold(2500);
    await switchText("You'll never walk alone again."); await hold(3500);

    // --- THE SURPRISE POPUP LOVE LETTER ---
    allocateParticles('💝', 20);
    await switchText(`
        <div style="font-style: italic; font-size: 1.3rem; color: var(--text-mid);">
            "Sorry for all the way...<br> 
            The love u gave me was somethin splc.<br> 
            Same I will give, love me, trust me, I can do it ma.<br> 
            Love u Suchi Kutty." 💖
        </div>
    `); 
    await hold(8000); 

    // --- FINAL MOVIE ENDING ANIMATION ---
    displayCard.classList.add('hidden-view'); 
    document.getElementById('cinemaFloorLayer').style.opacity = '1';
    await hold(1000);

    // Characters approach each other
    document.getElementById('boyNode').style.transform = 'translateX(115px)';
    document.getElementById('girlNode').style.transform = 'translateX(-115px)';
    await hold(6000); 

    // Interlock fingers
    document.getElementById('boyNode').querySelector('.actor-arm').style.transform = 'rotate(-30deg) translateX(5px)';
    document.getElementById('girlNode').querySelector('.actor-arm').style.transform = 'rotate(30deg) translateX(-5px)';
    
    allocateParticles('❤️', 35);
    await hold(5000); 

    // Bring display back
    displayCard.classList.remove('hidden-view');
    await switchText("Every ending can become a new beginning...<br>If we choose love...<br>Together.");
    await hold(4500);

    // --- FINAL CHOICE INTERACTIVE PROMPT ---
    textRenderer.innerHTML = `<h3>🌸</h3><h2 style='margin-top:10px; color: var(--text-dark);'>Shall We Start Chapter 2 Together?</h2>`;
    controlsTray.classList.add('active-tray');
}

function processPathSelection(selectedArgument) {
    controlsTray.classList.remove('active-tray');
    if (selectedArgument === 'yes') {
        allocateParticles('🦋', 50);
        allocateParticles('💖', 50);
        
        textRenderer.innerHTML = `
            <h2 style="color: var(--love-rose); font-size: 2.2rem; text-shadow: 0 0 10px rgba(255,77,109,0.2);">I LOVE YOU SUCHI MA</h2>
            <p style="margin-top:12px; font-weight:600; font-size:1.15rem;">One Kiss for Our New Beginning 🥺➡️😘</p>
            <p style="font-size:2.5rem; margin-top:10px; animation: popInName 1s infinite alternate;">💋</p>
            <p style="opacity:0.8; font-size:0.95rem; margin-top:5px;">Love You Forever ❤️</p>
        `;
    } else {
        textRenderer.innerHTML = `
            <h3>That's okay, ${loadNextDynamicToken()}...</h3>
            <p style="margin-top:12px; font-size:1.1rem; opacity:0.9; line-height:1.6;">Love isn't proven in one moment... I'll keep showing you through my actions.</p>
            <p style="color: var(--love-rose); margin-top:20px; font-weight:700;">❤️ I'll Never Stop Choosing You.</p>
        `;
    }
}

function switchText(stringMarkup) {
    return new Promise((completionCallback) => {
        textRenderer.style.opacity = '0';
        setTimeout(() => {
            textRenderer.innerHTML = stringMarkup;
            textRenderer.style.opacity = '1';
            completionCallback();
        }, 600);
    });
}

function allocateParticles(glyph, densityCount) {
    const spaceCanvasAnchor = document.getElementById('particleEmitterSpace');
    for(let offset = 0; offset < densityCount; offset++) {
        const elementInstance = document.createElement('div');
        elementInstance.className = 'live-particle';
        elementInstance.textContent = glyph;
        elementInstance.style.left = Math.random() * 100 + 'vw';
        elementInstance.style.fontSize = (Math.random() * 22 + 16) + 'px';
        elementInstance.style.animationDelay = (Math.random() * 2.5) + 's';
        spaceCanvasAnchor.appendChild(elementInstance);
        setTimeout(() => elementInstance.remove(), 4500);
    }
}

function hold(periodMs) { 
    return new Promise(resolvedState => setTimeout(resolvedState, periodMs)); 
}

window.addEventListener('DOMContentLoaded', initiateLoveStoryTimeline);
