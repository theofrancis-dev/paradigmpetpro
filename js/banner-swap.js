document.addEventListener("DOMContentLoaded", function () {
    const topImages = document.querySelectorAll("#banner-top img");
    const bottomImages = document.querySelectorAll("#banner-bottom img");

    function swapRandomImages() {
        if (topImages.length === 0 || bottomImages.length === 0) return;

        // Pick random images from each row
        let topIndex = Math.floor(Math.random() * topImages.length);
        let bottomIndex = Math.floor(Math.random() * bottomImages.length);

        // Get image elements
        let img1 = topImages[topIndex];
        let img2 = bottomImages[bottomIndex];

        // Add transition effect
        img1.classList.add("swap-animation");
        img2.classList.add("swap-animation");

        // Swap image sources
        let tempSrc = img1.src;
        img1.src = img2.src;
        img2.src = tempSrc;

        // Remove animation class after transition ends
        setTimeout(() => {
            img1.classList.remove("swap-animation");
            img2.classList.remove("swap-animation");
        }, 1000); // Match CSS transition duration
    }

    // Swap images every 2 minutes (120000 milliseconds)
    setInterval(swapRandomImages, 120000);
});
