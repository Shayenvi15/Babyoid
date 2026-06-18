```javascript id="x95s1f"
// Smooth Fade-In Animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});


// Create Background Particles

const particles = 40;

for(let i=0;i<particles;i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random()*100 + "vw";

    particle.style.animationDuration =
        10 + Math.random()*10 + "s";

    particle.style.animationDelay =
        Math.random()*5 + "s";

    particle.style.opacity =
        Math.random();

    particle.style.width =
        2 + Math.random()*4 + "px";

    particle.style.height =
        particle.style.width;

    document.body.appendChild(particle);
}


// Card Hover Glow

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(110,231,183,0.15),
        rgba(255,255,255,0.05))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background =
        "rgba(255,255,255,0.05)";

    });

});
```
