// Top Buys

document.querySelectorAll('.shadowCard').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        const width = cardRect.width;
        const height = cardRect.height;

        let boxShadow;

        if (x < width / 3) {
            // Hover from the left
            boxShadow = "25px 0px 60px rgba(0, 0, 0, 0.3), -25px 0px 60px rgba(255, 255, 255, 0.5)";
        } else if (x > 2 * width / 3) {
            // Hover from the right
            boxShadow = "-25px 0px 60px rgba(0, 0, 0, 0.3), 25px 0px 60px rgba(255, 255, 255, 0.5)";
        } else if (y < height / 3) {
            // Hover from the top
            boxShadow = "0px 25px 60px rgba(0, 0, 0, 0.3), 0px -25px 60px rgba(255, 255, 255, 0.5)";
        } else if (y > 2 * height / 3) {
            // Hover from the bottom
            boxShadow = "0px -25px 60px rgba(0, 0, 0, 0.3), 0px 25px 60px rgba(255, 255, 255, 0.5)";
        }

        card.style.boxShadow = boxShadow;
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff";
    });
});