document.addEventListener("DOMContentLoaded", () => {
    // 1. Circular Text Animation
    const text = "Web developer • Mobile developer • ";
    const container = document.getElementById("rotating-text");
    text.split("").forEach((char, i) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.transform = `rotate(${i * 10}deg)`;
        container.appendChild(span);
    });

    // 2. Hello Language Changer
    const hellos = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "Konnichiwa", "Olá"];
    const helloEl = document.getElementById("hello-text");
    let count = 0;
    setInterval(() => {
        helloEl.innerText = hellos[count];
        count = (count + 1) % hellos.length;
    }, 1000);

    // 3. Scroll Animations (GSAP)
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animation
    gsap.from(".title-text", { duration: 2.9, y: 100, opacity: 0, ease: "power2.out" });

    // Animate skill rows on scroll
    gsap.utils.toArray(".skill-row").forEach((row) => {
        gsap.from(row, {
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -50,
            duration: 1.8
        });
    });
});