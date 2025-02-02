document.addEventListener("DOMContentLoaded", function () {
    const topImages = document.querySelectorAll("#banner-top img");
    const bottomImages = document.querySelectorAll("#banner-bottom img");

    function getOffset(element) {
        const rect = element.getBoundingClientRect();
        return { left: rect.left, top: rect.top };
    }

    function swapRandomImages() {
        if (topImages.length === 0 || bottomImages.length === 0) return;

        // Pick random images from each row
        let topIndex = Math.floor(Math.random() * topImages.length);
        let bottomIndex = Math.floor(Math.random() * bottomImages.length);

        let img1 = topImages[topIndex];
        let img2 = bottomImages[bottomIndex];

        // Get positions before swap
        let pos1 = getOffset(img1);
        let pos2 = getOffset(img2);

        // Calculate movement distances
        let deltaX = pos2.left - pos1.left;
        let deltaY = pos2.top - pos1.top;

        // Add animation classes and move images
        img1.style.transition = "transform 1.5s ease-in-out";
        img2.style.transition = "transform 1.5s ease-in-out";

        img1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        img2.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

        // After animation, swap the images
        setTimeout(() => {
            let tempSrc = img1.src;
            img1.src = img2.src;
            img2.src = tempSrc;

            // Reset position
            img1.style.transition = "";
            img2.style.transition = "";
            img1.style.transform = "";
            img2.style.transform = "";
        }, 1500); // Matches the transition time
    }

    // Swap images every 2 minutes (120000 milliseconds)
    setInterval(swapRandomImages, 120000);
});
