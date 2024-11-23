document.addEventListener("DOMContentLoaded", () => {
    const typingText = document.querySelector('.typing-text');
    const aboutText = document.querySelector('.about-text');
    
    const aboutMe = ["HR Manager", "Content Writer", "Frontend Developer"];
    let aboutIndex = 0;
    
    function typeText(text, element, callback) {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 100);
    }
    
    function eraseText(element, callback) {
        const interval = setInterval(() => {
            if (element.textContent.length > 0) {
                element.textContent = element.textContent.slice(0, -1);
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 50);
    }
    
    function rotateAboutText() {
        eraseText(aboutText, () => {
            aboutIndex = (aboutIndex + 1) % aboutMe.length;
            typeText(aboutMe[aboutIndex], aboutText, () => {
                setTimeout(rotateAboutText, 2000);
            });
        });
    }
    
    typeText("Laxmi Prasanna", typingText, () => {
        typeText(aboutMe[aboutIndex], aboutText, () => {
            setTimeout(rotateAboutText, 2000);
        });
    });
});
