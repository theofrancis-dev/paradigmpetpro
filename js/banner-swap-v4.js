/**
 * fade out before transition and fade in when finish, didnt really like it
 */

document.addEventListener("DOMContentLoaded", function () {
    const topImages = document.querySelectorAll("#banner-top img");
    const bottomImages = document.querySelectorAll("#banner-bottom img");

    function getOffset(element) {
        const rect = element.getBoundingClientRect();
        return { left: rect.left, top: rect.top };
    }

    function swapImages(img1, img2) {
        let pos1 = getOffset(img1);
        let pos2 = getOffset(img2);

        let deltaX = pos2.left - pos1.left;
        let deltaY = pos2.top - pos1.top;

        // Apply fade-out effect
        img1.style.transition = "opacity 0.8s ease-in-out";
        img2.style.transition = "opacity 0.8s ease-in-out";
        img1.style.opacity = "0";
        img2.style.opacity = "0";

        setTimeout(() => {
            // Move images while they are faded out
            img1.style.transition = "transform 1s ease-in-out";
            img2.style.transition = "transform 1s ease-in-out";
            img1.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            img2.style.transform = `translate(${-deltaX}px, ${-deltaY}px)`;

            setTimeout(() => {
                // Swap image sources after movement
                let tempSrc = img1.src;
                img1.src = img2.src;
                img2.src = tempSrc;

                // Reset position
                img1.style.transition = "";
                img2.style.transition = "";
                img1.style.transform = "";
                img2.style.transform = "";

                // Fade images back in
                img1.style.transition = "opacity 0.8s ease-in-out";
                img2.style.transition = "opacity 0.8s ease-in-out";
                img1.style.opacity = "1";
                img2.style.opacity = "1";

            }, 1000); // Matches movement duration
        }, 800); // Matches fade-out duration
    }

    function swapMultipleImages() {
        if (topImages.length === 0 || bottomImages.length === 0) return;

        let usedIndexes = new Set();

        for (let i = 0; i < 3; i++) { // Swap 3 pairs at the same time
            let topIndex, bottomIndex;

            do {
                topIndex = Math.floor(Math.random() * topImages.length);
            } while (usedIndexes.has(topIndex));
            usedIndexes.add(topIndex);

            do {
                bottomIndex = Math.floor(Math.random() * bottomImages.length);
            } while (usedIndexes.has(bottomIndex));
            usedIndexes.add(bottomIndex);

            let img1 = topImages[topIndex];
            let img2 = bottomImages[bottomIndex];

            swapImages(img1, img2);
        }
    }

    // Swap images every 2 minutes (120000 milliseconds)
    setInterval(swapMultipleImages, 120000);
});
